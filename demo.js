const sizes = ["M", "S", "L"]
const colors = ["Red", "Green"]
const types = ["Cotton", "Wool", "Demo","Dee"]

let variants = [
    // { size: 'M', color: 'Red', type: 'Cotton', qty: '0' },
    // { size: 'M', color: 'Red', type: 'Wool', qty: '3' },
    // { size: 'M', color: 'Red', type: 'Demo', qty: '0' },
    // { size: 'M', color: 'Green', type: 'Cotton', qty: '0' },
    // { size: 'M', color: 'Green', type: 'Wool', qty: '10' },
    // { size: 'M', color: 'Green', type: 'Demo', qty: '0' },
    // { size: 'S', color: 'Red', type: 'Cotton', qty: '43' },
    // { size: 'S', color: 'Red', type: 'Wool', qty: '0' },
    // { size: 'S', color: 'Red', type: 'Demo', qty: '13' },
    // { size: 'S', color: 'Green', type: 'Cotton', qty: '0' },
    // { size: 'S', color: 'Green', type: 'Wool', qty: '0' },
    // { size: 'S', color: 'Green', type: 'Demo', qty: '0' }
]

function GetVarient() {
    for (const size of sizes) {
        for (const color of colors) {
            for (const type of types) {
                const variant = { size, color, type, qty:"0" };
                if(variants.filter(e => e.size === size && e.color === color && e.type === type)?.length === 0){
                    variants.push(variant);
                }
            }
        }
    }
    console.log(variants);
}

function RemoveItem(array, value, value1){
    array?.filter(e => e !== value)
    const result = variants?.filter(e=> e[value1] !== value)
    console.log(result);
}

// RemoveItem(types, "Cotton", 'type')

GetVarient()