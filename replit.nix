{ pkgs }: {
  deps = [
    pkgs.mmh
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}
