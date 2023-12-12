

async function connectToMetaMask() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const connectedAddress = accounts[0];

        document.getElementById("connectedAccount").innerText = connectedAddress;

        // Get ETH balance
        const balance = await web3.eth.getBalance(connectedAddress);
        const formattedBalance = web3.utils.fromWei(balance, "ether");
        document.getElementById("balance").innerText = formattedBalance;

        // Replace the contract address and ABI with your ERC20 token's details
        const tokenAddress = "0x51e96e8Dd65893A88FA22Ba3495c6f6EE6123441";
        const tokenAbi = [
          // ERC20 standard functions
          {
            constant: true,
            inputs: [{ name: "_owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "balance", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          // Other functions...
        ];

        const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);

        // Get ERC20 token balance
        const tokenBalance = await tokenContract.methods.balanceOf(connectedAddress).call();
       
      } else {
        console.error("MetaMask extension not detected");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  }





