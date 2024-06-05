import { Shape } from './Shape';
import { Circle } from './Circle';
import { Square } from './Square';

let shapes: Shape[] = [new Circle(), new Square()];

shapes.forEach((shape) => shape.draw());