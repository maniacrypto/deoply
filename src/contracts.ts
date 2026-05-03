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
    bytecode: "608060405234801561000f575f5ffd5b50604051611eb2380380611eb2833981810160405281019061003191906106c3565b33838381600390816100439190610963565b5080600490816100539190610963565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100c6575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100bd9190610a71565b60405180910390fd5b6100d5816101da60201b60201c565b505f835103610119576040517f8e8e8a0600000000000000000000000000000000000000000000000000000000815260040161011090610ae4565b60405180910390fd5b5f82510361015c576040517f8e8e8a0600000000000000000000000000000000000000000000000000000000815260040161015390610b4c565b60405180910390fd5b5f810361019e576040517f8e8e8a0600000000000000000000000000000000000000000000000000000000815260040161019590610bb4565b60405180910390fd5b6101d2336101b061029d60201b60201c565b600a6101bc9190610d3a565b836101c79190610d84565b6102a560201b60201c565b505050610e55565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f6012905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610315575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161030c9190610a71565b60405180910390fd5b6103265f838361032a60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361037a578060025f82825461036e9190610dc5565b92505081905550610448565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610403578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016103fa93929190610e07565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361048f578060025f82825403925050819055506104d9565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105369190610e3c565b60405180910390a3505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6105a28261055c565b810181811067ffffffffffffffff821117156105c1576105c061056c565b5b80604052505050565b5f6105d3610543565b90506105df8282610599565b919050565b5f67ffffffffffffffff8211156105fe576105fd61056c565b5b6106078261055c565b9050602081019050919050565b8281835e5f83830152505050565b5f61063461062f846105e4565b6105ca565b9050828152602081018484840111156106505761064f610558565b5b61065b848285610614565b509392505050565b5f82601f83011261067757610676610554565b5b8151610687848260208601610622565b91505092915050565b5f819050919050565b6106a281610690565b81146106ac575f5ffd5b50565b5f815190506106bd81610699565b92915050565b5f5f5f606084860312156106da576106d961054c565b5b5f84015167ffffffffffffffff8111156106f7576106f6610550565b5b61070386828701610663565b935050602084015167ffffffffffffffff81111561072457610723610550565b5b61073086828701610663565b9250506040610741868287016106af565b9150509250925092565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061079957607f821691505b6020821081036107ac576107ab610755565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261080e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826107d3565b61081886836107d3565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61085361084e61084984610690565b610830565b610690565b9050919050565b5f819050919050565b61086c83610839565b6108806108788261085a565b8484546107df565b825550505050565b5f5f905090565b610897610888565b6108a2818484610863565b505050565b5f5b828110156108c8576108bd5f82840161088f565b6001810190506108a9565b505050565b601f82111561091b578282111561091a576108e7816107b2565b6108f0836107c4565b6108f9856107c4565b6020861015610906575f90505b808301610915828403826108a7565b505050505b5b505050565b5f82821c905092915050565b5f61093b5f1984600802610920565b1980831691505092915050565b5f610953838361092c565b9150826002028217905092915050565b61096c8261074b565b67ffffffffffffffff8111156109855761098461056c565b5b61098f8254610782565b61099a8282856108cd565b5f60209050601f8311600181146109cb575f84156109b9578287015190505b6109c38582610948565b865550610a2a565b601f1984166109d9866107b2565b5f5b82811015610a00578489015182556001820191506020850194506020810190506109db565b86831015610a1d5784890151610a19601f89168261092c565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610a5b82610a32565b9050919050565b610a6b81610a51565b82525050565b5f602082019050610a845f830184610a62565b92915050565b5f82825260208201905092915050565b7f4e616d65206973207265717569726564000000000000000000000000000000005f82015250565b5f610ace601083610a8a565b9150610ad982610a9a565b602082019050919050565b5f6020820190508181035f830152610afb81610ac2565b9050919050565b7f53796d626f6c20697320656d70747900000000000000000000000000000000005f82015250565b5f610b36600f83610a8a565b9150610b4182610b02565b602082019050919050565b5f6020820190508181035f830152610b6381610b2a565b9050919050565b7f537570706c79206d757374206265203e203000000000000000000000000000005f82015250565b5f610b9e601283610a8a565b9150610ba982610b6a565b602082019050919050565b5f6020820190508181035f830152610bcb81610b92565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f5f8291508390505b6001851115610c5457808604811115610c3057610c2f610bd2565b5b6001851615610c3f5780820291505b8081029050610c4d85610bff565b9450610c14565b94509492505050565b5f82610c6c5760019050610d27565b81610c79575f9050610d27565b8160018114610c8f5760028114610c9957610cc8565b6001915050610d27565b60ff841115610cab57610caa610bd2565b5b8360020a915084821115610cc257610cc1610bd2565b5b50610d27565b5060208310610133831016604e8410600b8410161715610cfd5782820a905083811115610cf857610cf7610bd2565b5b610d27565b610d0a8484846001610c0b565b92509050818404811115610d2157610d20610bd2565b5b81810290505b9392505050565b5f60ff82169050919050565b5f610d4482610690565b9150610d4f83610d2e565b9250610d7c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610c5d565b905092915050565b5f610d8e82610690565b9150610d9983610690565b9250828202610da781610690565b91508282048414831517610dbe57610dbd610bd2565b5b5092915050565b5f610dcf82610690565b9150610dda83610690565b9250828201905080821115610df257610df1610bd2565b5b92915050565b610e0181610690565b82525050565b5f606082019050610e1a5f830186610a62565b610e276020830185610df8565b610e346040830184610df8565b949350505050565b5f602082019050610e4f5f830184610df8565b92915050565b61105080610e625f395ff3fe608060405234801561000f575f5ffd5b50600436106100b2575f3560e01c8063715018a61161006f578063715018a6146101a05780638da5cb5b146101aa57806395d89b41146101c8578063a9059cbb146101e6578063dd62ed3e14610216578063f2fde38b14610246576100b2565b806306fdde03146100b6578063095ea7b3146100d457806318160ddd1461010457806323b872dd14610122578063313ce5671461015257806370a0823114610170575b5f5ffd5b6100be610262565b6040516100cb9190610cc9565b60405180910390f35b6100ee60048036038101906100e99190610d7a565b6102f2565b6040516100fb9190610dd2565b60405180910390f35b61010c610314565b6040516101199190610dfa565b60405180910390f35b61013c60048036038101906101379190610e13565b61031d565b6040516101499190610dd2565b60405180910390f35b61015a61034b565b6040516101679190610e7e565b60405180910390f35b61018a60048036038101906101859190610e97565b610353565b6040516101979190610dfa565b60405180910390f35b6101a8610398565b005b6101b26103ab565b6040516101bf9190610ed1565b60405180910390f35b6101d06103d3565b6040516101dd9190610cc9565b60405180910390f35b61020060048036038101906101fb9190610d7a565b610463565b60405161020d9190610dd2565b60405180910390f35b610230600480360381019061022b9190610eea565b610485565b60405161023d9190610dfa565b60405180910390f35b610260600480360381019061025b9190610e97565b610507565b005b60606003805461027190610f55565b80601f016020809104026020016040519081016040528092919081815260200182805461029d90610f55565b80156102e85780601f106102bf576101008083540402835291602001916102e8565b820191905f5260205f20905b8154815290600101906020018083116102cb57829003601f168201915b5050505050905090565b5f5f6102fc61058b565b9050610309818585610592565b600191505092915050565b5f600254905090565b5f5f61032761058b565b90506103348582856105a4565b61033f858585610637565b60019150509392505050565b5f6012905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6103a0610727565b6103a95f6107ae565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546103e290610f55565b80601f016020809104026020016040519081016040528092919081815260200182805461040e90610f55565b80156104595780601f1061043057610100808354040283529160200191610459565b820191905f5260205f20905b81548152906001019060200180831161043c57829003601f168201915b5050505050905090565b5f5f61046d61058b565b905061047a818585610637565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b61050f610727565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361057f575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016105769190610ed1565b60405180910390fd5b610588816107ae565b50565b5f33905090565b61059f8383836001610871565b505050565b5f6105af8484610485565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156106315781811015610622578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161061993929190610f85565b60405180910390fd5b61063084848484035f610871565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106a7575f6040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161069e9190610ed1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610717575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161070e9190610ed1565b60405180910390fd5b610722838383610a40565b505050565b61072f61058b565b73ffffffffffffffffffffffffffffffffffffffff1661074d6103ab565b73ffffffffffffffffffffffffffffffffffffffff16146107ac5761077061058b565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016107a39190610ed1565b60405180910390fd5b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036108e1575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016108d89190610ed1565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610951575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016109489190610ed1565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610a3a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610a319190610dfa565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a90578060025f828254610a849190610fe7565b92505081905550610b5e565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610b19578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610b1093929190610f85565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba5578060025f8282540392505081905550610bef565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c4c9190610dfa565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610c9b82610c59565b610ca58185610c63565b9350610cb5818560208601610c73565b610cbe81610c81565b840191505092915050565b5f6020820190508181035f830152610ce18184610c91565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610d1682610ced565b9050919050565b610d2681610d0c565b8114610d30575f5ffd5b50565b5f81359050610d4181610d1d565b92915050565b5f819050919050565b610d5981610d47565b8114610d63575f5ffd5b50565b5f81359050610d7481610d50565b92915050565b5f5f60408385031215610d9057610d8f610ce9565b5b5f610d9d85828601610d33565b9250506020610dae85828601610d66565b9150509250929050565b5f8115159050919050565b610dcc81610db8565b82525050565b5f602082019050610de55f830184610dc3565b92915050565b610df481610d47565b82525050565b5f602082019050610e0d5f830184610deb565b92915050565b5f5f5f60608486031215610e2a57610e29610ce9565b5b5f610e3786828701610d33565b9350506020610e4886828701610d33565b9250506040610e5986828701610d66565b9150509250925092565b5f60ff82169050919050565b610e7881610e63565b82525050565b5f602082019050610e915f830184610e6f565b92915050565b5f60208284031215610eac57610eab610ce9565b5b5f610eb984828501610d33565b91505092915050565b610ecb81610d0c565b82525050565b5f602082019050610ee45f830184610ec2565b92915050565b5f5f60408385031215610f0057610eff610ce9565b5b5f610f0d85828601610d33565b9250506020610f1e85828601610d33565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610f6c57607f821691505b602082108103610f7f57610f7e610f28565b5b50919050565b5f606082019050610f985f830186610ec2565b610fa56020830185610deb565b610fb26040830184610deb565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610ff182610d47565b9150610ffc83610d47565b925082820190508082111561101457611013610fba565b5b9291505056fea264697066735822122009f38b20c610e8fb3ad6c6244ab2239f1ccd270d4563127527cba81e4bb2cbfe64736f6c63430008220033" // Mock bytecode for demo
  },
  COUNTER: {
    name: "Counter",
    description: "A simple counter that can be incremented and decremented.",
    address:"0x0450311c18085325b917857673001b874C66a8ba",
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
    bytecode: "0x6080604052348015600f57600080fd5b5060008055610123806100226000396000f3fe6080604052348015600f57600080fd5b6004361060485760003560e01c806306661abd14604d578063371303c0146067578063d09de08a146081575b600080fd5b6051609b565b6040518082815260200191505060405180910390f35b606560a1565b005b607f60ab565b005b60005481565b600080546001019055565b6000805460019003905556fea26469706673582212204c3e387c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b7c8a6f3b64736f6c63430008120033"
  },
  GM: {
    address:"0x6021dc6745Da6221d930F08ab21eF43121F8D556",
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