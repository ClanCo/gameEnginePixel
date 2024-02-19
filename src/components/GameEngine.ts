import Tile from './Tile';

class GameEngine {
  tiles: Tile[][];
  playerPosition: { row: number; col: number };

  constructor(rows: number, cols: number, tileWidth: number, tileHeight: number) {
    this.tiles = [];
    for (let i = 0; i < rows; i++) {
      this.tiles[i] = [];
      for (let j = 0; j < cols; j++) {
        // Calcul des positions x et y pour chaque tuile
        const x = j * tileWidth;
        const y = i * tileHeight;

        // Initialisation de la tuile avec les coordonnées calculées
        this.tiles[i][j] = new Tile({ x, y, width: tileWidth, height: tileHeight });
      }
    }
    this.playerPosition = { row: 0, col: 0 }; // Position initiale du joueur
  }

  // Déplacer le joueur
  movePlayer(direction: string) {
    const newPos = { ...this.playerPosition };

    switch (direction) {
      case 'ArrowUp':
        newPos.col--;
        break;
      case 'ArrowDown':
        newPos.col++;
        break;
      case 'ArrowLeft':
        newPos.row--;
        break;
      case 'ArrowRight':
        newPos.row++;
        break;
      default:
        break;
    }

    console.log(newPos);
    // Vérifier les collisions
    if (!this.checkCollision(newPos)) {
      this.playerPosition = newPos;
    }
  }

  // Vérifier les collisions avec les tuiles
  private checkCollision(position: { row: number; col: number }): boolean {
    // Logique de collision avec les tuiles
    return false; // Pour l'exemple, toujours retourner false
  }
}

export default GameEngine;
