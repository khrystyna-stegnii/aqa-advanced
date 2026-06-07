function divide(numerator, denominator) {

if (denominator === 0) {
    throw new Error('Denominator cannot be zero');
}
if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both arguments must be numbers');
}
return numerator / denominator;  
}

try {
    console.log(divide(100, 10));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(100, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(100, 'test'));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide(true, 'test2'));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}

try {
    console.log(divide('test', 200));
} catch (error) {
    console.error(error.message);
} finally {
    console.log('Робота завершена');
}