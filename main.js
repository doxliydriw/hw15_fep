// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки.
// Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу,
// достатньо зберігати дані про результати виклику.
// Зберігати потрібно останні 10 дзвінків.


function withCache(func) {
  let cache = [];
  function wrapper(num) {
    if (cache.includes(num)) {
      console.log("Found in cache:", num);
      return num;
    }
    let result = func(num);
    console.log("Computed:", result);
    if (cache.length === 10) {
        cache.shift();
        console.log(cache);
    }
    cache.push(result);
    return result;
  }
  return wrapper;
}

function call(num) {
  return num
}

let callWithCache = withCache(call);

num = ''

while (num != null) {
    let num = prompt('Please enter phone number');
    if (num === "" || num == null) {
      break;
    }
    callWithCache(num);
}