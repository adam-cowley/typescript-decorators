import { increment } from "../meta";

export function ParameterDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(increment(), 'ParameterDectorator called for ', target.constructor.name, 'on property key', propertyKey, 'at index', parameterIndex, '\n');
}

export function ParameterDecoratorFactory(message: string) {
    return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
        console.log(increment(), 'ParameterDectorator called for ', target.constructor.name, 'on property key', propertyKey, 'at index', parameterIndex,'. message: ', message, '\n');
    }
}

