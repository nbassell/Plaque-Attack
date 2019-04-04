const Util = {
  isCollided(source, target) {
    const targetLeft = target.pos.x;
    const targetRight = target.pos.x + target.size.x;
    const sourceLeft = source.pos.x + source.size.x * (1/4);
    const sourceRight = source.pos.x + source.size.x * (3/4);
    const targetTop = target.pos.y;
    const targetBottom = target.pos.y + target.size.y;
    const sourceTop = source.pos.y + source.size.y * (1/5);
    const sourceBottom = source.pos.y + source.size.y * (3/4);

    return !(
      ( sourceBottom < targetTop ) ||
      ( sourceTop > targetBottom ) ||
      ( sourceRight < targetLeft ) ||
      ( sourceLeft > targetRight )
    );
  },

  // isCollidedLeft(source, target) {
  //   return (
  //     ( ( target.pos.x + target.size.x ) >= source.pos.x ) &&
  //     ( ( target.pos.x + target.size.x ) < source.pos.x + source.size.x)
  //   );
  // },

  isCollidedLeft(source, target) {
    const targetRight = target.pos.x + target.size.x;
    const sourceLeft = source.pos.x;
    const sourceRight = source.pos.x + source.size.x;
    
    return (
      ( sourceLeft <= targetRight ) &&
      ( sourceRight > targetRight )
    );
  },

  isCollidedRight(source, target) {
    const targetLeft = target.pos.x;
    const sourceRight = source.pos.x + source.size.x;
    const sourceLeft = source.pos.x;

    return (
      ( sourceRight >= targetLeft ) &&
      ( sourceLeft < targetLeft )
    );
  },

  isCollidedY(source, target) {
    const sourceTop = source.pos.y;
    const sourceBottom = source.pos.y + source.size.y;
    const targetTop = target.pos.y;
    const targetBottom = target.pos.y + target.size.y;

    return !(
      ( sourceBottom < targetTop ) ||
      ( sourceTop > targetBottom )
    );
  }
}

export default Util;