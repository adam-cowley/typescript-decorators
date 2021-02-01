import { increment } from "../meta";

export function ClassDecorator(constructor: Function): void {
    console.log(increment(), 'ClassDecorator called for', constructor.name, '\n');
}

export function ClassDecoratorFactory(message: string) {
    return (constructor: Function): void => {
        console.log(increment(), 'ClassDecoratorFactory called for', constructor.name, 'with argument', message, '\n');
    }
}

