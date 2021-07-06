// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function studlyCaps(str = '') {
    if (typeof str !== 'string') {
        return str;
    }

    return str.split('')
        .map(c => alternate() === 1 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}

function capitalisedConsonants(str = '') {
	if (typeof str !== 'string') {
        return str;
    }

    return str.split('')
        .map(c => ['A','E','I','O','U','a','e','i','o','u'].includes(c) ? c.toLowerCase() : c.toUpperCase())
        .join('');
}

function capitalisedVowels(str = '') {
	if (typeof str !== 'string') {
        return str;
    }

    return str.split('')
        .map(c => ['A','E','I','O','U','a','e','i','o','u'].includes(c) ? c.toUpperCase() : c.toLowerCase())
        .join('');
}

var i = 0;
function alternate() {
	if (i === 0) {
		i = 1;
		return 0;
	} else {
		i = 0;
		return 1;
	}
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable1 = vscode.commands.registerCommand('studlycaps.studlycaps', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const processed = studlyCaps(word);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, processed);
			});
		}
	});

	let disposable2 = vscode.commands.registerCommand('studlycaps.capitalisedconsonants', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const processed = capitalisedConsonants(word);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, processed);
			});
		}
	});

	let disposable3 = vscode.commands.registerCommand('studlycaps.capitalisedvowels', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			const processed = capitalisedVowels(word);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, processed);
			});
		}
	});

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
}

// this method is called when your extension is deactivated
export function deactivate() {}
