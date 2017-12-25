import Linter, { FILE_NAME } from "./Linter";
import * as JSON from "circular-json";
import { RuleFailure, LintResult } from "tslint";

document.addEventListener("DOMContentLoaded", function(e) {
    /* DOM elements we'll need */
    const ELEMENT_SOURCE: HTMLTextAreaElement = document.getElementById(
        "source",
    ) as HTMLTextAreaElement;

    const ELEMENT_JSON: HTMLDivElement = document.getElementById(
        "json",
    ) as HTMLDivElement;

    ELEMENT_SOURCE.onkeyup = (e: KeyboardEvent) => {
        localStorage.setItem("source", (e.target as HTMLInputElement).value);
        _Linter = new Linter({ fix: false });
        _Linter.lint("TSLintPlayground.ts", localStorage.getItem("source"));
        ELEMENT_JSON.innerText = getFailures(_Linter.getResult());
    };

    const source = `import * as React from 'react'`;

    localStorage.setItem("source", source);

    let _Linter = new Linter({ fix: false });

    ELEMENT_JSON.innerText = getFailures(_Linter.getResult());

    function getFailures(result: LintResult): string {
        return result.failures.length === 0
            ? "(No errors)"
            : JSON.stringify(result.failures[0].getFailure());
    }
});
