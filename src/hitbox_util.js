import ColumnSection from './column-section';
import Player from './player';
import 

/* Source and target objects contain x, y and width, height */
  sectionCollided(source, target) {
    return !(
      ( ( source.y + source.height ) < ( target.y ) ) ||
      ( source.y > ( target.y + target.height ) ) ||
      ( ( source.x + source.width ) < target.x ) ||
      ( source.x > ( target.x + target.width ) )
    );
  }

  targetCollided(source, target) {
    return !(
      ( ( source.y + source.height ) < ( target.y ) ) ||
      ( source.y > ( target.y + target.height ) ) ||
      ( ( source.x + source.width ) < target.x ) ||
      ( source.x > ( target.x + target.width ) )
    );
  }