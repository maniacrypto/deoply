/**
 * Simple pre-compiled contracts for deployment
 */

export const CONTRACT_TEMPLATES = {
  TOKEN: {
    name: "ERC-20 Token",
    description: "Standard fungible token with fixed supply.",
    button:"Deploy Contract",
    //address:"0x895c6Ceed80656CFE663d4Dfd78187C13f362031",
    abi:[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "supply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "error",
				"type": "string"
			}
		],
		"name": "create_Error",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],
    // This is a simplified ERC20 bytecode. In a real app, you'd use a full implementation.
    // For this example, I'll provide the data needed to interact.
    bytecode: "0x608060405234801561000f575f5ffd5b50604051611cc0380380611cc083398181016040528101906100319190610697565b33838381600390816100439190610937565b5080600490816100539190610937565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100c6575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100bd9190610a45565b60405180910390fd5b6100d5816101b660201b60201c565b505f835103610119576040517f8e8e8a0600000000000000000000000000000000000000000000000000000000815260040161011090610ab8565b60405180910390fd5b5f82510361015c576040517f8e8e8a0600000000000000000000000000000000000000000000000000000000815260040161015390610b20565b60405180910390fd5b5f810361019e576040517f8e8e8a0600000000000000000000000000000000000000000000000000000000815260040161019590610b88565b60405180910390fd5b6101ae338261027960201b60201c565b505050610c63565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102e9575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016102e09190610a45565b60405180910390fd5b6102fa5f83836102fe60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361034e578060025f8282546103429190610bd3565b9250508190555061041c565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156103d7578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016103ce93929190610c15565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610463578060025f82825403925050819055506104ad565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161050a9190610c4a565b60405180910390a3505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61057682610530565b810181811067ffffffffffffffff8211171561059557610594610540565b5b80604052505050565b5f6105a7610517565b90506105b3828261056d565b919050565b5f67ffffffffffffffff8211156105d2576105d1610540565b5b6105db82610530565b9050602081019050919050565b8281835e5f83830152505050565b5f610608610603846105b8565b61059e565b9050828152602081018484840111156106245761062361052c565b5b61062f8482856105e8565b509392505050565b5f82601f83011261064b5761064a610528565b5b815161065b8482602086016105f6565b91505092915050565b5f819050919050565b61067681610664565b8114610680575f5ffd5b50565b5f815190506106918161066d565b92915050565b5f5f5f606084860312156106ae576106ad610520565b5b5f84015167ffffffffffffffff8111156106cb576106ca610524565b5b6106d786828701610637565b935050602084015167ffffffffffffffff8111156106f8576106f7610524565b5b61070486828701610637565b925050604061071586828701610683565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061076d57607f821691505b6020821081036107805761077f610729565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026107e27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826107a7565b6107ec86836107a7565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61082761082261081d84610664565b610804565b610664565b9050919050565b5f819050919050565b6108408361080d565b61085461084c8261082e565b8484546107b3565b825550505050565b5f5f905090565b61086b61085c565b610876818484610837565b505050565b5f5b8281101561089c576108915f828401610863565b60018101905061087d565b505050565b601f8211156108ef57828211156108ee576108bb81610786565b6108c483610798565b6108cd85610798565b60208610156108da575f90505b8083016108e98284038261087b565b505050505b5b505050565b5f82821c905092915050565b5f61090f5f19846008026108f4565b1980831691505092915050565b5f6109278383610900565b9150826002028217905092915050565b6109408261071f565b67ffffffffffffffff81111561095957610958610540565b5b6109638254610756565b61096e8282856108a1565b5f60209050601f83116001811461099f575f841561098d578287015190505b610997858261091c565b8655506109fe565b601f1984166109ad86610786565b5f5b828110156109d4578489015182556001820191506020850194506020810190506109af565b868310156109f157848901516109ed601f891682610900565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a2f82610a06565b9050919050565b610a3f81610a25565b82525050565b5f602082019050610a585f830184610a36565b92915050565b5f82825260208201905092915050565b7f4e616d65206973207265717569726564000000000000000000000000000000005f82015250565b5f610aa2601083610a5e565b9150610aad82610a6e565b602082019050919050565b5f6020820190508181035f830152610acf81610a96565b9050919050565b7f53796d626f6c20697320656d70747900000000000000000000000000000000005f82015250565b5f610b0a600f83610a5e565b9150610b1582610ad6565b602082019050919050565b5f6020820190508181035f830152610b3781610afe565b9050919050565b7f537570706c79206d757374206265203e203000000000000000000000000000005f82015250565b5f610b72601283610a5e565b9150610b7d82610b3e565b602082019050919050565b5f6020820190508181035f830152610b9f81610b66565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610bdd82610664565b9150610be883610664565b9250828201905080821115610c0057610bff610ba6565b5b92915050565b610c0f81610664565b82525050565b5f606082019050610c285f830186610a36565b610c356020830185610c06565b610c426040830184610c06565b949350505050565b5f602082019050610c5d5f830184610c06565b92915050565b61105080610c705f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c8063715018a61161006f578063715018a6146101a05780638da5cb5b146101aa57806395d89b41146101c8578063a9059cbb146101e6578063dd62ed3e14610216578063f2fde38b14610246576100b2565b806306fdde03146100b6578063095ea7b3146100d457806318160ddd1461010457806323b872dd14610122578063313ce5671461015257806370a0823114610170575b5f5ffd5b6100be610262565b6040516100cb9190610cc9565b60405180910390f35b6100ee60048036038101906100e99190610d7a565b6102f2565b6040516100fb9190610dd2565b60405180910390f35b61010c610314565b6040516101199190610dfa565b60405180910390f35b61013c60048036038101906101379190610e13565b61031d565b6040516101499190610dd2565b60405180910390f35b61015a61034b565b6040516101679190610e7e565b60405180910390f35b61018a60048036038101906101859190610e97565b610353565b6040516101979190610dfa565b60405180910390f35b6101a8610398565b005b6101b26103ab565b6040516101bf9190610ed1565b60405180910390f35b6101d06103d3565b6040516101dd9190610cc9565b60405180910390f35b61020060048036038101906101fb9190610d7a565b610463565b60405161020d9190610dd2565b60405180910390f35b610230600480360381019061022b9190610eea565b610485565b60405161023d9190610dfa565b60405180910390f35b610260600480360381019061025b9190610e97565b610507565b005b60606003805461027190610f55565b80601f016020809104026020016040519081016040528092919081815260200182805461029d90610f55565b80156102e85780601f106102bf576101008083540402835291602001916102e8565b820191905f5260205f20905b8154815290600101906020018083116102cb57829003601f168201915b5050505050905090565b5f5f6102fc61058b565b9050610309818585610592565b600191505092915050565b5f600254905090565b5f5f61032761058b565b90506103348582856105a4565b61033f858585610637565b60019150509392505050565b5f6012905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6103a0610727565b6103a95f6107ae565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546103e290610f55565b80601f016020809104026020016040519081016040528092919081815260200182805461040e90610f55565b80156104595780601f1061043057610100808354040283529160200191610459565b820191905f5260205f20905b81548152906001019060200180831161043c57829003601f168201915b5050505050905090565b5f5f61046d61058b565b905061047a818585610637565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b61050f610727565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361057f575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016105769190610ed1565b60405180910390fd5b610588816107ae565b50565b5f33905090565b61059f8383836001610871565b505050565b5f6105af8484610485565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156106315781811015610622578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161061993929190610f85565b60405180910390fd5b61063084848484035f610871565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106a7575f6040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161069e9190610ed1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610717575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161070e9190610ed1565b60405180910390fd5b610722838383610a40565b505050565b61072f61058b565b73ffffffffffffffffffffffffffffffffffffffff1661074d6103ab565b73ffffffffffffffffffffffffffffffffffffffff16146107ac5761077061058b565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107a39190610ed1565b60405180910390fd5b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036108e1575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016108d89190610ed1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610951575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016109489190610ed1565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610a3a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610a319190610dfa565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a90578060025f828254610a849190610fe7565b92505081905550610b5e565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610b19578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610b1093929190610f85565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba5578060025f8282540392505081905550610bef565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c4c9190610dfa565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610c9b82610c59565b610ca58185610c63565b9350610cb5818560208601610c73565b610cbe81610c81565b840191505092915050565b5f6020820190508181035f830152610ce18184610c91565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610d1682610ced565b9050919050565b610d2681610d0c565b8114610d30575f5ffd5b50565b5f81359050610d4181610d1d565b92915050565b5f819050919050565b610d5981610d47565b8114610d63575f5ffd5b50565b5f81359050610d7481610d50565b92915050565b5f5f60408385031215610d9057610d8f610ce9565b5b5f610d9d85828601610d33565b9250506020610dae85828601610d66565b9150509250929050565b5f8115159050919050565b610dcc81610db8565b82525050565b5f602082019050610de55f830184610dc3565b92915050565b610df481610d47565b82525050565b5f602082019050610e0d5f830184610deb565b92915050565b5f5f5f60608486031215610e2a57610e29610ce9565b5b5f610e3786828701610d33565b9350506020610e4886828701610d33565b9250506040610e5986828701610d66565b9150509250925092565b5f60ff82169050919050565b610e7881610e63565b82525050565b5f602082019050610e915f830184610e6f565b92915050565b5f60208284031215610eac57610eab610ce9565b5b5f610eb984828501610d33565b91505092915050565b610ecb81610d0c565b82525050565b5f602082019050610ee45f830184610ec2565b92915050565b5f5f60408385031215610f0057610eff610ce9565b5b5f610f0d85828601610d33565b9250506020610f1e85828601610d33565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610f6c57607f821691505b602082108103610f7f57610f7e610f28565b5b50919050565b5f606082019050610f985f830186610ec2565b610fa56020830185610deb565b610fb26040830184610deb565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610ff182610d47565b9150610ffc83610d47565b925082820190508082111561101457611013610fba565b5b9291505056fea2646970667358221220b3a2bd7ac958e25fb325e7c64df047e61b6b986c7c842239d56e2e681c6f4de764736f6c63430008220033" // Mock bytecode for demo
  },
  COUNTER: {
    name: "Counter",
    description: "A simple counter that can be incremented and decremented.",
	address:"0x4D310fB5521de9d6142bC4c57D73E0538e87C1ca",

    //address:"0x0450311c18085325b917857673001b874C66a8ba",
    button:"Counter",
	abi:[
	{
		"inputs": [],
		"name": "increament",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],
//     abi:[
//   {
//     "inputs": [],
//     "name": "increament",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_address",
//         "type": "address"
//       }
//     ],
//     "name": "count",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "counter",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ],
    bytecode: "0x6080604052348015600f57600080fd5b5060008055610123806100226000396000f3fe6080604052348015600f57600080fd5b6004361060485760003560e01c806306661abd14604d578063371303c0146067578063d09de08a146081575b600080fd5b6051609b565b6040518082815260200191505060405180910390f35b606560a1565b005b607f60ab565b005b60005481565b600080546001019055565b6000805460019003905556fea26469706673582212204c3e387c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b64736f6c63430008120033"
  },
  GM: {
	address:"0x875481D2665f0A49876e7474Aeae73d8d8d5Ade0",
    //address:"0x6021dc6745Da6221d930F08ab21eF43121F8D556",
    name: "GM (Greeting)",
    description: "Store a 'Good Morning' message or personal greeting.",
    button:"GM",
	abi:[
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_message",
        "type": "string"
      }
    ],
    "name": "sayGM",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "lastMessageTime",
        "type": "uint256"
      }
    ],
    "name": "WaitTimeRemaining",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "SimpleGMCode__NewGM",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getEnDTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getLastMessageTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalGMs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "LastMessge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "messages",
    "outputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
],
//     abi:[
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_message",
//         "type": "string"
//       }
//     ],
//     "name": "sayGM",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "lastMessageTime",
//         "type": "uint256"
//       }
//     ],
//     "name": "WaitTimeRemaining",
//     "type": "error"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "message",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "name": "SimpleGMCode__NewGM",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_address",
//         "type": "address"
//       }
//     ],
//     "name": "getEnDTime",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_address",
//         "type": "address"
//       }
//     ],
//     "name": "getLastMessageTime",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getTotalGMs",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "LastMessge",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "messages",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "message",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ],
    
    bytecode: "[object Object]"
  }
};


//GM:0xC5eFf0f4c23B8b65480a7f3EaBbe6Dd4f304D48a

// [
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": true,
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "string",
//         "name": "message",
//         "type": "string"
//       },
//       {
//         "indexed": false,
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "name": "NewGM",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_message",
//         "type": "string"
//       }
//     ],
//     "name": "sayGM",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getTotalGMs",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "messages",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "message",
//         "type": "string"
//       },
//       {
//         "internalType": "uint256",
//         "name": "timestamp",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]