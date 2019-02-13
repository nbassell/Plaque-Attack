const Util = {
  isCollided(source, target) {
    return !(
      ( ( source.pos.y + source.size.y ) < ( target.pos.y ) ) ||
      ( source.pos.y > ( target.pos.y + target.size.y ) ) ||
      ( ( source.pos.x + source.size.x ) < target.pos.x ) ||
      ( source.pos.x > ( target.pos.x + target.size.x ) )
    );
  },

  isCollidedLeft(source, target) {
    return (
      ( ( target.pos.x + target.size.x ) >= source.pos.x ) &&
      ( ( target.pos.x + target.size.x ) < source.pos.x + source.size.x)
    );
  },

  isCollidedRight(source, target) {
    return (
      ( ( target.pos.x ) <= source.pos.x + source.size.x) &&
      ( ( target.pos.x ) > source.pos.x )
    );
  },

  isCollidedY(source, target) {
    return !(
      ( ( source.pos.y + source.size.y ) < ( target.pos.y ) ) ||
      ( source.pos.y > ( target.pos.y + target.size.y ) )
    );
  }
}

// randomDirection() {
//   return Math.floor(Math.random() * 2)
// }

export default Util;

  // isCollided(player, section) {
  //   return !(
  //     ( ( player.pos.y + player.size.y ) < ( section.pos.y ) ) ||
  //     ( player.pos.y > ( section.pos.y + section.size.y ) ) ||
  //     ( ( player.pos.x + player.size.x ) < section.pos.x ) ||
  //     ( player.pos.x > ( section.pos.x + section.size.x ) )
  //   );
  // }


  // export function bulletCollided(bullet, section) {
  //   return !(
  //     ( ( bullet.pos.y + bullet.size.y ) < ( section.pos.y ) ) ||
  //     ( bullet.pos.y > ( section.pos.y + section.size.y ) ) ||
  //     ( ( bullet.pos.x + bullet.size.x ) < section.pos.x ) ||
  //     ( bullet.pos.x > ( section.pos.x + section.size.x ) )
  //   );
  // }
