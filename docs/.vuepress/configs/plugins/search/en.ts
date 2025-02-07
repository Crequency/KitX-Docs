interface SearchLocaleOptions {
    placeholder: string;
    buttonText: string;
    resetButtonTitle: string;
    backButtonTitle: string;
    noResultsText: string;
    footer: {
        selectText: string;
        selectKeyAriaLabel: string;
        navigateText: string;
        navigateUpKeyAriaLabel: string;
        navigateDownKeyAriaLabel: string;
        closeText: string;
        closeKeyAriaLabel: string;
    };
}
export const searchBoxEn: SearchLocaleOptions = {
    placeholder: 'Search Docs',
    buttonText: 'Search',
    resetButtonTitle: 'Reset',
    backButtonTitle: 'Back',
    noResultsText: 'No Results',
    footer: {
        selectText: 'Select',
        selectKeyAriaLabel: 'select',
        navigateText: 'Navigate',
        navigateUpKeyAriaLabel: 'Up',
        navigateDownKeyAriaLabel: 'Down',
        closeText: 'Close',
        closeKeyAriaLabel: 'close',
    }
};

