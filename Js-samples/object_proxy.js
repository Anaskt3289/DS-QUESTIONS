try {
    const user = {
        name: "Test",
        age: 20
    }

    let handler = {
        get(target, prop) {
            return target[prop]
        },
        set(target, prop, value) {
            if (prop == "age" && value < 18) throw new Error("Age must be 18+")
            target[prop] = value
            return true;
        }
    }
    const userProxy = new Proxy(user, handler)
    console.log(userProxy.name);
    userProxy.age = 30;
    userProxy.age = 10;
} catch (err) {
    console.log(`Error ::`, err);
}

