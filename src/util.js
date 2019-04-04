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

export default Util;