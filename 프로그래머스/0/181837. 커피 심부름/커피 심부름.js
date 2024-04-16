const solution = (orders) => {
    const menu = {
        americano: 4500,
        cafelatte: 5000,
        anything: 4500,
    }
    
    return orders.reduce((acc, curr) => {
        Object.keys(menu).map((item) => {
            if (curr.includes(item)) {
                acc += menu[item];
            }
        });
            return acc;
        }, 0);
}
 