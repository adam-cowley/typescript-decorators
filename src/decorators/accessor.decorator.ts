import { increment } from "../meta";

export function AccessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(increment(), 'AccessorDecorator called for', target.constructor.name, ' on property key', propertyKey, 'descriptor:', descriptor, '\n');
}

export function AccessorDecoratorFactory(message: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(increment(), 'AccessorDecoratorFactory called for', target.constructor.name, ' on property key', propertyKey, 'descriptor:', descriptor, 'message: ', message, '\n');
    }
}