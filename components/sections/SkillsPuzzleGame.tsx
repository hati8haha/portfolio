"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { allSKills } from './data';

interface PuzzlePiece {
  id: number;
  skill: typeof allSKills[0];
  position: number;
  isCorrect: boolean;
  isSelected: boolean;
}

const SkillsPuzzleGame = () => {
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>([]);
  const [targetPieces, setTargetPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [hint, setHint] = useState<string>('');

  const PUZZLE_SIZE = 6; // Number of skills to match

  const initializeGame = useCallback(() => {
    // Select random skills for the puzzle
    const selectedSkills = allSKills
      .sort(() => Math.random() - 0.5)
      .slice(0, PUZZLE_SIZE);

    // Create target positions (first 6 positions)
    const targets = selectedSkills.map((skill, index) => ({
      id: index,
      skill,
      position: index,
      isCorrect: false,
      isSelected: false,
    }));

    // Create shuffled pieces for the bottom area
    const pieces = selectedSkills
      .sort(() => Math.random() - 0.5)
      .map((skill, index) => ({
        id: index + PUZZLE_SIZE,
        skill,
        position: PUZZLE_SIZE + index,
        isCorrect: false,
        isSelected: false,
      }));

    setTargetPieces(targets);
    setPuzzlePieces(pieces);
    setScore(0);
    setGameCompleted(false);
    setTimer(0);
  }, []);

  const startGame = () => {
    setGameStarted(true);
    initializeGame();
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameCompleted(false);
    setSelectedPiece(null);
    setTimer(0);
    setHint('');
  };

  const calculateFinalScore = useCallback((completionTime: number, baseScore: number) => {
    // Time bonus calculation: faster completion = higher bonus
    // Perfect time (30 seconds) = 1000 bonus points
    // Every second over 30 reduces the bonus
    const perfectTime = 30;
    const maxBonus = 1000;
    
    if (completionTime <= perfectTime) {
      return baseScore + maxBonus;
    } else {
      const timePenalty = (completionTime - perfectTime) * 10;
      const timeBonus = Math.max(0, maxBonus - timePenalty);
      return baseScore + timeBonus;
    }
  }, []);

  const handlePieceClick = (pieceId: number, isTarget: boolean) => {
    if (gameCompleted) return;

    if (isTarget) {
      // Clicking on a target slot
      if (selectedPiece !== null) {
        // Try to place the selected piece here
        const selectedPieceData = puzzlePieces.find(p => p.id === selectedPiece);
        const targetSlot = targetPieces.find(t => t.id === pieceId);
        
        if (selectedPieceData && targetSlot && !targetSlot.isCorrect) {
          // Check if it's the correct match
          if (selectedPieceData.skill.name === targetSlot.skill.name) {
            // Correct match!
            setTargetPieces(prev => prev.map(piece => 
              piece.id === pieceId 
                ? { ...piece, isCorrect: true }
                : piece
            ));
            setPuzzlePieces(prev => prev.filter(p => p.id !== selectedPiece));
            setScore(prev => prev + 100);
            setSelectedPiece(null);
            setHint('Great match! 🎉');

            // Check if game is completed
            const updatedTargets = targetPieces.map(piece => 
              piece.id === pieceId 
                ? { ...piece, isCorrect: true }
                : piece
            );
            if (updatedTargets.every(piece => piece.isCorrect)) {
              // Calculate final score based on completion time
              const finalScore = calculateFinalScore(timer, score + 100);
              setScore(finalScore);
              setGameCompleted(true);
            }
          } else {
            // Wrong match - deselect
            setSelectedPiece(null);
            setPuzzlePieces(prev => prev.map(piece => ({
              ...piece,
              isSelected: false
            })));
            setHint('Not quite right. Try again! 🤔');
          }
        }
      }
    } else {
      // Clicking on a puzzle piece
      if (selectedPiece === pieceId) {
        // Deselect if clicking the same piece
        setSelectedPiece(null);
        setPuzzlePieces(prev => prev.map(piece => ({
          ...piece,
          isSelected: false
        })));
      } else {
        // Select this piece
        setSelectedPiece(pieceId);
        setPuzzlePieces(prev => prev.map(piece => ({
          ...piece,
          isSelected: piece.id === pieceId
        })));
        setHint(`Selected: ${puzzlePieces.find(p => p.id === pieceId)?.skill.name} 📋`);
      }
    }
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted]);

  // Hint clearing effect
  useEffect(() => {
    if (hint && !hint.includes('Selected')) {
      const timeout = setTimeout(() => {
        setHint('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [hint]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const renderSkillIcon = (skill: typeof allSKills[0], size = 'normal') => {
    const IconComponent = skill.icon;
    const sizeClass = size === 'small' ? 'w-6 h-6' : 'w-8 h-8';
    
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <IconComponent 
          className={sizeClass} 
          color={skill.color || '#00d8ff'} 
        />
        <span className={`text-xs mt-1 text-center ${size === 'small' ? 'text-[8px]' : ''}`}>
          {skill.name.length > 8 ? skill.name.substring(0, 8) + '...' : skill.name}
        </span>
      </div>
    );
  };

  return (
    <motion.div 
      className="liquid-glass p-8 min-h-[600px] relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-white text-xl">Skills Matching Puzzle</h3>

        </div>
        
        {gameStarted && (
          <div className="flex justify-end items-center space-x-6">
            <span className="text-white/80 font-medium text-sm">Time: {formatTime(timer)}</span>
            <span className="text-white/80 font-medium text-sm">Score: {score}</span>
            <button 
              type="button"
              onClick={resetGame}
              className="glass-button glass-button-secondary"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {!gameStarted ? (
        <motion.div 
          className="flex items-center justify-center h-96 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-white">
            <h4 className="text-2xl font-bold mb-4">🎯 Skills Detective Game!</h4>
            <p className="text-lg mb-4 text-white/80">
              Can you guess which tech skills I know? 🤔
            </p>
            <p className="text-sm text-white/60 mb-6">
              Match the right skills to the right spots and find out! 🚀<br/>
              <span className="text-emerald-400">⚡ Speed bonus: Finish faster for higher scores!</span>
            </p>
            <button 
              type="button"
              onClick={startGame}
              className="glass-button glass-button-primary"
            >
              Let&apos;s Play! 🎮
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-8">
          {/* Target Grid */}
          <div className="space-y-4">
            <h4 className="text-white/90 font-semibold text-xs">Target Skills (Click to place selected piece):</h4>
            <div className="grid grid-cols-3 gap-4">
              {targetPieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  onClick={() => handlePieceClick(piece.id, true)}
                  className={`
                    relative h-24 border-2 rounded-xl cursor-pointer transition-all duration-300
                    ${piece.isCorrect 
                      ? 'border-emerald-400/50 bg-emerald-500/10 backdrop-blur-sm' 
                      : 'border-white/20 glass-card-light hover:border-white/40'
                    }
                  `}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {piece.isCorrect ? (
                    <div className="flex items-center justify-center h-full text-white">
                      {renderSkillIcon(piece.skill)}
                      <motion.div
                        className="absolute top-2 right-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-emerald-400 text-xl">✓</span>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/40">
                      {renderSkillIcon(piece.skill, 'small')}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Available Pieces */}
          <div className="space-y-4">
            <h4 className="text-white/90 font-semibold text-xs">Available Pieces (Click to select):</h4>
            <div className="grid grid-cols-3 gap-4">
              {puzzlePieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  onClick={() => handlePieceClick(piece.id, false)}
                  className={`
                    relative h-24 border-2 rounded-xl cursor-pointer transition-all duration-300 text-white
                    ${piece.isSelected 
                      ? 'border-blue-400/60 glass-card shadow-lg shadow-blue-500/20' 
                      : 'border-white/20 glass-card-light hover:border-white/40'
                    }
                  `}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={piece.isSelected ? { 
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' 
                  } : {}}
                >
                  <div className="flex items-center justify-center h-full">
                    {renderSkillIcon(piece.skill)}
                  </div>
                  {piece.isSelected && (
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-400/50 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Game Status */}
          {hint && (
            <motion.div 
              className="text-center text-blue-300 p-4 glass-card-light rounded-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p>{hint}</p>
            </motion.div>
          )}

          {selectedPiece && !hint.includes('Selected') && (
            <motion.div 
              className="text-center text-blue-300/80 p-3 glass-card-light rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>Selected piece! Click on a target slot to place it.</p>
            </motion.div>
          )}

          {gameCompleted && (
            <motion.div 
              className="text-center space-y-4 p-6 glass-card border-emerald-400/30 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h4 className="text-2xl font-bold text-emerald-400">🎉 Puzzle Completed!</h4>
              <div className="space-y-2 text-white/80">
                <p>Completion Time: {formatTime(timer)}</p>
                <p>Base Score: {(Math.floor(score / 100) - 1) * 100} pts</p>
                <p className="text-emerald-400">Time Bonus: +{score - ((Math.floor(score / 100) - 1) * 100)} pts</p>
                <p className="text-xl font-bold text-white">Final Score: {score}</p>
              </div>
              <div className="text-sm text-white/60">
                {timer <= 30 ? "⚡ Lightning fast! Perfect time bonus!" : 
                 timer <= 60 ? "🚀 Great speed! Nice time bonus!" : 
                 "🎯 Good job! Keep practicing for better time bonus!"}
              </div>
              <button 
                type="button"
                onClick={resetGame}
                className="glass-button glass-button-primary"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SkillsPuzzleGame;
