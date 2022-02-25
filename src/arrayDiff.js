
const PromotionMessage = ['A2', 'A3']; // new promotion json
// bruteForce : O(n^2)
// Compare above two Arrays =>

// markInActiveFalse: ['A home delivery'] => CouponIds => CouponCodeDB => Inactive
// AddNew: ['A2']; => CouponAssocation New: CouponCodeDB => isActive:true


const DB = [{
    id:1,
    version: {
        name: ''
    }
  },
  {
    id:2,
    version: {
        name: 'A2'
    }
  },
  {
    id:3,
    version: {
        name: 'A3'
    }
  }
];
const versionArr = []

DB.forEach(a1 => {
    console.log(a1);
    if ( a1.version.name  != '') {
        versionArr.push();
    }
});
// versionArr = DB.map(a1 => a1.version.name == '' ? null : a1.version.name ).filter(item => item);

console.log({versionArr});


const markInActiveFalse = versionArr.filter(version => PromotionMessage.indexOf(version) === -1);

// ==> two tables mark inactive false

const AddNew = PromotionMessage.filter(promoVersion => versionArr.indexOf(promoVersion) === -1);

// ==> make new entry in CA
// ==> CC mark isActive: false

const doNothing = PromotionMessage.filter(promoVersion => versionArr.indexOf(promoVersion) > -1);



console.log({markInActiveFalse}, {AddNew}, {doNothing});



const x = [1,2,4,5];
const set = new Set([...x])

console.log({set});

