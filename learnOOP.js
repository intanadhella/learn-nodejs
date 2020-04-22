class Manusia {
    constructor(obj = {}) {
        this.name = obj.name || ""
        this.age = obj.age || 1
    }
    getNameAndAge() {
        return `${this.name} and ${this.age} years`
    }
}
const budi = new Manusia({
    name: "Budi Bakti",
    age: 18
})
// console.log(budi)

class Pekerjaan extends Manusia {
    constructor(opt = {}) {
        super(opt)
        this.pekerjaan = opt.pekerjaan ||''
        this.bekerjaSejak = opt.bekerjaSejak ||''
    }
    render() {
        let kerja = "masih bisa kerja"
        if (this.age >=50){
            kerja = "tidak boleh kerja keras"
        }
        return `
        <h1>${this.name}</h1>
        <h2>${kerja}</h2>`

    }
}

class Rumah extends Pekerjaan {
    constructor(obj = {}) {
        super(obj)
        this.alamat = obj.alamat || ''
    }
    render() {
        return `alamat tinggal di ${this.alamat}`
    }
}

const PakDe = new Pekerjaan({
    name: "Pak De", 
    age: 20, 
    pekerjaan:'tukang pijat'
})
console.log (PakDe)
PakDe.render()

const BuDe = new Pekerjaan ({
    name: "Jeng Juminten",
    age: 18,
    pekerjaan: "Tukang Masak",
    bekerjaSejak: "1999"
})
BuDe.getNameAndAge()

const rumahA01 = new Rumah({
    name: 'Intan',
    alamat: 'Batam'
})
