import { ClassDecorator, ClassDecoratorFactory } from "./decorators/class.decorator";
import { AccessorDecorator, AccessorDecoratorFactory } from "./decorators/accessor.decorator";
import { PropertyDecorator, PropertyDecoratorFactory } from "./decorators/property.decorator";
import { ParameterDecorator, ParameterDecoratorFactory } from "./decorators/parameter.decorator";

// 3. These Class Decorators are called in reverse order from bottom to top
@ClassDecorator
@ClassDecoratorFactory('Hello')
class MyClass {

    @PropertyDecorator
    @PropertyDecoratorFactory('World')
    myProperty?: string;

    // 2. These Method decorators are run in reverse order from bottom to top
    @AccessorDecorator
    @AccessorDecoratorFactory('Foo')
    myMethod(
        @ParameterDecorator
        @ParameterDecoratorFactory('Bar')
        myParameter: string
    ) {
        return myParameter
    }


}


const c = new MyClass()

console.log(c, c.myMethod('baz'));
