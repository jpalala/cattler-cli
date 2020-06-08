#!/usr/bin/env node
var chalk = require('chalk')
const {argv} = require('yargs')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const { exec } = require('child_process');

const exec_commands = (commands) => {
  var command = commands.shift()
  exec(command, (error, stdout, stderr) => {
    console.log(chalk.gray("$ ") + chalk.yellow(command))
    console.log("")
    if (error) {
      console.error(chalk.red(error));
      process.exit(1)
      return;
    }
    if(stdout) console.log(chalk.gray(stdout));
    if(stderr) console.log(chalk.gray(stderr));

    if(commands.length) exec_commands(commands)
  });
}

let user = process.env.USER || ""
//check me
const _dotfiles = HOME_DOTFILES =  argv.dotfiles || "~/.dotfiles"; 

//change me if default seems to not work (ie you're root, the default fail) or on WINDOW$ lels.
const HOMEDIR = argv.homedir || '/home/' + user

// running on prod or dev machine?
const environnement = argv.env || 'dev' ;
const filemap = [
  { "bashrc": ".bashrc" },
  { "zshrc": ".zshrc"},
  { "bashrc": ".bashrc" }
  { "tmux": ".tmux.conf"},
  { "npmrc": . ".npmrc"}
]

/* TODO Fix for the following which requires an algorithm to look in
 * dotfiles subdirectory ie (ssh/.git/) or as top level file 
 * ( gitconfig/sshconfig) 
*/
// { "sshconfig": HOMEDIR + "/.ssh/config"},
//  { "gitconfig": HOMEDIR + "/.git/config" },
  

function promptBeforeContinuing(fileList) {

   rl.question("Do you want to symlink the above ", function(yesorno) {
		if(yesorno == 'yes' || yesorno == 'y') {
			commands = []
			// TODO - fix for sshconfig/gitconfig, w/c is in
			// subfolder of the homedir
			
			process.chdir(_dotfiles);
			
			for(file in fileList) {
				var dotfile = ;
				var destfile = file;
				commands.push = 'ln -s ' + dotfile + ' '  + destfile;
			}
			// run the symlink instructions
			exec_commands(commands);
			
		} else {
			console.log('Cest fini');
			exit();
		}
        rl.close();
    });
}


let files = [];
let cattlerConf = require('cattler.json');
if(environnement && (cattlerConf[environnement])) {
  const liste = cattlerConf[environnement]
  if(!isArray(liste)) {
	console.log("ceci n'est pas une liste"); 
	exit()
  } else {
  files = list[filemap]
  promptBeforeContinuing(files);
  }
}


//TODO , go through all the listed open("");
