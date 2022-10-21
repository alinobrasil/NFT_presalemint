const { ethers } = require('hardhat')
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {

    const MyContract = await ethers.getContractFactory("CryptoDevs");
    const contract = await MyContract.attach(
        "0x72cF8CA1DBA7d6FB2dd68FBb3dA12054Be53b9CA" // The deployed contract address
    );

    // Verify the contract after deploying
    await hre.run("verify:verify", {
        address: contract.address,
        constructorArguments: [METADATA_URL, WHITELIST_CONTRACT_ADDRESS],
    });
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })