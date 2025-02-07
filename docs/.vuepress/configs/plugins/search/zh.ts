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
export const searchBoxZh: SearchLocaleOptions = {
    placeholder: '搜索文档',
    buttonText: '搜索',
    resetButtonTitle: '重置',
    backButtonTitle: '返回',
    noResultsText: '无结果',
    footer: {
        selectText: '选择',
        selectKeyAriaLabel: 'select',
        navigateText: '切换',
        navigateUpKeyAriaLabel: 'navigate-to-up',
        navigateDownKeyAriaLabel: 'navigate-to-down',
        closeText: '关闭',
        closeKeyAriaLabel: 'close',
    }
};

