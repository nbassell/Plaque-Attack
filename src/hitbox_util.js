import ColumnSection from './column-section';
import Player from './player';
import Bullet from './bullet';

/* Source and target objects contain x, y and width, height */
  export function sectionCollided(player, section) {
    return !(
      ( ( player.y + player.height ) < ( section.y ) ) ||
      ( player.y > ( section.y + section.height ) ) ||
      ( ( player.x + player.width ) < section.x ) ||
      ( player.x > ( section.x + section.width ) )
    );
  }

  export function bulletCollided(bullet, section) {
    return !(
      ( ( bullet.y + bullet.height ) < ( section.y ) ) ||
      ( bullet.y > ( section.y + section.height ) ) ||
      ( ( bullet.x + bullet.width ) < section.x ) ||
      ( bullet.x > ( section.x + section.width ) )
    );
  }