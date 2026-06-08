import { useState } from 'react';
import { StoryDb, Character } from './types';
import { TitleScreen } from './components/TitleScreen';
import { CharacterCreator } from './components/CharacterCreator';
import { StoryEngine } from './components/StoryEngine';
import { storyDb } from './data/storyDb';

type GameState = 'TITLE' | 'CREATE' | 'PLAY';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('TITLE');
  const [character, setCharacter] = useState<Character | null>(null);

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {gameState === 'TITLE' && (
        <TitleScreen onStart={() => setGameState('CREATE')} />
      )}
      
      {gameState === 'CREATE' && (
        <CharacterCreator 
          onComplete={(char) => {
            setCharacter(char);
            setGameState('PLAY');
          }} 
        />
      )}

      {gameState === 'PLAY' && character && storyDb && (
        <StoryEngine 
          storyDb={storyDb} 
          character={character} 
          onReset={() => {
            setCharacter(null);
            setGameState('TITLE');
          }}
        />
      )}
    </div>
  );
}

