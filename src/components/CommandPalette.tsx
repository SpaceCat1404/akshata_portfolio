import React, { useEffect } from 'react';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { useCommandStore } from '@/lib/command-store';
import { useNavigate } from 'react-router-dom';
import { FileText, Home, Mail, Rss, User, Ghost } from 'lucide-react';
export function CommandPalette() {
  const { isOpen, close, toggle } = useCommandStore();
  const navigate = useNavigate();
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggle]);
  const runCommand = (command: () => unknown) => {
    close();
    command();
  };
  return (
    <CommandDialog open={isOpen} onOpenChange={close}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => navigate('/'))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/about'))}>
            <User className="mr-2 h-4 w-4" />
            <span>About</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/projects'))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/blog'))}>
            <Rss className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/contact'))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Secrets">
          <CommandItem onSelect={() => runCommand(() => navigate('/ctf'))}>
            <Ghost className="mr-2 h-4 w-4" />
            <span>???</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}