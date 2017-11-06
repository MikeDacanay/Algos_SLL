function Node(value) {
  	this.val=value;
  	this.next=null;
}

function SLL() {
	this.head=new Node('head')
}

SLL.prototype.find = function(val) {
	var runner = this.head;
	while(runner){
		if(runner.val === val){
			return runner;
		}		
		runner=runner.next;	
	}
	return null;
}

SLL.prototype.insert = function(newVal, val){
	var newNode = new Node(newVal);
	var current = this.find(val);

	if(current){
		newNode.next=current.next
		current.next= newNode
	}
}

SLL.prototype.display = function(){
	if(this.head === null){
		return null;
	}

	var runner = this.head;
	while(runner.next){
		runner = runner.next;
		console.log(runner.val);
	}
}

SLL.prototype.findPrevious= function(val) {
	if(this.head === null){
		return null;
	}

	var runner = this.head;
	while(runner){
		if(runner.next.val === val){
			return runner;
		}
		runner=runner.next;
	}	
}

SLL.prototype.remove= function(val) {
	currentNode = this.findPrevious(val);
	removeNode = currentNode.next; 
	currentNode.next = currentNode.next.next;
	removeNode.next = null;
}

var basketballTeams = new SLL();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();