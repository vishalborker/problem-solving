const Blocks = [
    {
        gym: false,
        school: true,
        store: false
    },
    {
        gym: true,
        school: false,
        store: false
    },
    {
        gym: true,
        school: true,
        store: false
    },
    {
        gym: false,
        school: true,
        store: false
    },
    {
        gym: false,
        school: true,
        store: true
    }
];

const Req = ["gym", "school", "store"];

const Initialize = (Blocks, BlockDistance) => {
    for (let i = 0; i < Blocks.length; i++) {
        Object.keys(Blocks[i]).forEach(reqkey => {
            if (Req.indexOf(reqkey) > - 1) {
                if (!BlockDistance[i]) {
                    BlockDistance[i] = {[reqkey]: null}
                }
                if (Blocks[i][reqkey] === true) {
                    BlockDistance[i][reqkey] = 0;
                } else {
                    BlockDistance[i][reqkey] = Infinity;
                }
            }
        })
    }
}


const TraverseForward = (Blocks, BlockDistance) => {
    for (let i = 0; i < Blocks.length; i++) {
        for (let j = i + 1; j < Blocks.length; j++) {

            Object.keys(Blocks[i]).forEach(reqkey => {
                if (Req.indexOf(reqkey) > - 1) {
                    if (BlockDistance[i][reqkey] !== 0) {
                        if (Blocks[j][reqkey] === true) {
                            BlockDistance[i][reqkey] = Math.min(j-i, BlockDistance[i][reqkey]);
                        }
                    }
                }
            });
        }
    }
    console.log(BlockDistance);
}

const TraverseBackward = (Blocks, BlockDistance) => {
    for (let i = Blocks.length - 1; i >=0; i--) {
        for (let j = i - 1; j >=0; j--) {

            Object.keys(Blocks[i]).forEach(reqkey => {
                if (Req.indexOf(reqkey) > - 1) {
                    if (BlockDistance[i][reqkey] !== 0) {
                        if (Blocks[j][reqkey] === true) {
                            BlockDistance[i][reqkey] = Math.min(i-j, BlockDistance[i][reqkey]);
                        }
                    }
                }
            });
        }
    }
    console.log(BlockDistance);
}

const BestBlock = (Blocks, BlockDistance) => {
    let best = 0;
    const len = Object.keys(BlockDistance).length
    for(let i = 1; i < len; i++) {
        const better = Object.keys(Blocks[i]).every(reqkey => {
            return BlockDistance[i][reqkey] <= BlockDistance[best][reqkey];
        });

        if (better) {
            best = i;
        }
    }
    return best + 1;
}


const len = Blocks.length;
const BlockDistance = {};

Initialize(Blocks, BlockDistance);
TraverseForward(Blocks, BlockDistance);
TraverseBackward(Blocks, BlockDistance);
const bestBlock = BestBlock(Blocks, BlockDistance);


console.log({bestBlock});