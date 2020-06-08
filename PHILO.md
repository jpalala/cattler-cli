Cattler is a new way to create sane defaults for sDevs using CentOS and any other linux distribution that supports NodeJS.

Terminology

`sdev` - server dev - a machine usally used by devs to work on their projects, on the cloud.
`packager` or `package management` - a way to idempotently install the same packages (usually tools like zsh, ack, z.sh) all through out
`dotfiles` the configuration for many of the tools (ie .git/config, .tmux.conf) 

By using NodeJS means it can be run on any machine that support nodejs. 

First is the dotfiles symlinking program which is almost done.
Second is managemnet of how to install things easily from different sources. (yum).
Third is the community website to document everything and provide new ideas for the project.
