#Rails学习笔记  
- 使用```脚手架```在数据库中创建表时，使用```单数```，而在浏览器中浏览表中所有数据时，域名是```复数```。  

- ```脚手架```创建表时，不需要创建```id```属性，这个会默认创建的，而且作为主键存在，值不会重复，即一个表想删除之后，其对应的```id```也会被删除，并且其他的```id```不会变。  

- 因为太长时间没```update```导致```$ brew update```出错时，运行以下指令一般都能解决问题：  

	    cd (brew --repository)
	    git remote add origin https://github.com/mxcl/homebrew.git
	    git fetch origin
	    sudo git reset --hard origin/master