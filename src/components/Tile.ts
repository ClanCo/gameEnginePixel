// Tile.ts

type TileProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

class Tile {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(props: TileProps) {
    this.x = props.x;
    this.y = props.y;
    this.width = props.width;
    this.height = props.height;
  }

  // Method to check collision with other tile
  collidesWith(other: Tile): boolean {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }
}

export default Tile;
