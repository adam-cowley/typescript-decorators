/**
 * Property Decorators
 *
 * https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
//
import { increment } from "../meta";

export function PropertyDecorator(target : any, propertyKey: string, descriptor?: PropertyDescriptor) {
    console.log(increment(), 'PropertyDecorator called on', target.constructor.name, ' on property key', propertyKey, 'descriptor:', descriptor, '\n');
}

export function PropertyDecoratorFactory(message: string) {
    return (target: any, propertyKey: string) => {
        console.log(increment(), 'PropertyDecoratorFactory called for', target.constructor.name, ' on property key', propertyKey, 'message: ', message, '\n');
    }
}