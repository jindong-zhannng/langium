import { TextDocument, TextDocumentContentChangeEvent } from 'vscode-languageserver-textdocument';
import { TextDocumentsConfiguration } from 'vscode-languageserver/node';
import { AstNode } from '../syntax-tree';
import { ParseResult } from '../parser/langium-parser';
import { AstNodeDescription } from '../references/scope';

export interface LangiumDocument extends TextDocument {
    parseResult?: ParseResult<AstNode>
    precomputedScopes?: PrecomputedScopes
}
export interface ProcessedLangiumDocument extends TextDocument {
    parseResult: ParseResult<AstNode>
    precomputedScopes?: PrecomputedScopes
}

export type PrecomputedScopes = Map<AstNode, AstNodeDescription[]>

export const LangiumDocumentConfiguration: TextDocumentsConfiguration<LangiumDocument> = {
    create(uri: string, languageId: string, version: number, content: string): LangiumDocument {
        return TextDocument.create(uri, languageId, version, content);
    },
    update(document: LangiumDocument, changes: TextDocumentContentChangeEvent[], version: number): LangiumDocument {
        return TextDocument.update(document, changes, version);
    }
};