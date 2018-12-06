import { FormControl } from '@angular/forms';
export function restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) { return null; }
        let invalidWords;
        invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);
        console.log(invalidWords);
        return invalidWords && (invalidWords.length > 0)
            ? {'restrictedWords': invalidWords.join(', ')}
            : null;
    };
}
/*
export function restrictedWords (control: FormControl): {[key: string]: any} {
    return control.value.includes('fuck')
        ? {'restrictedWords': 'fuck'}
        : null;
}
 */
