export default class ShopService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getMobiles() {
        return await this.getResource('/mobiles/');
    }

    async getMenuList() {
        return await this.getResource('/menuList/');
    }

    async getLaptops() {
        return await this.getResource('/laptops/');
    }

    async getItem(id) {
        const res = await this.getResource('/menu/');
        console.log(res);
        const item = res.find((el) => {
            console.log(`el.id: ${el.id}, id: ${id}`);
            return el.id === +id;
        })
        console.log(item);
        return item;
    }

    async setOrder(order) {
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }
        const response = await fetch(`${this._apiBase}/orders/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });
        if (!response.ok) {
            throw new Error('json error');
        } else {
            alert('Order accepted! Thank you :)')
        }
    }

    async getOrderNumber() {
        const res = await this.getResource('/orders/');
        const orderNumber = res.length + 1;

        return orderNumber
    }
}