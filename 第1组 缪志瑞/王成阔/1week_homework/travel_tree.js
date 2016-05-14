function travel_tree(tree_node){
	if(tree_node !== null)
		console.log(tree_node);
		travel_tree(tree_node.left);
		travel_tree(tree_node.right);
}
//travel_tree();