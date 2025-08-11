export const themeConfig = {
    // Primary Colors
    primaryColor: 'text-blue-600',
    primaryBg: 'bg-blue-600',
    primaryBgLight: 'bg-blue-50',
    primaryHover: 'hover:bg-blue-700',

    // Secondary Colors
    secondaryColor: 'text-indigo-600',
    secondaryBg: 'bg-indigo-600',

    // Accent Colors
    accentColor: 'text-purple-600',
    accentPink: 'text-pink-500',
    accentEmerald: 'text-emerald-600',
    accentAmber: 'text-amber-500',
    accentOrange: 'text-orange-500',

    // Text Colors
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textMuted: 'text-gray-600',
    textLight: 'text-gray-500',
    textLighter: 'text-gray-400',
    textWhite: 'text-white',

    // Background Colors
    backgroundColor: 'bg-white',
    bgGray: 'bg-gray-50',
    bgGrayLight: 'bg-gray-100',
    bgDark: 'bg-gray-900',

    // Button Colors
    buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
    buttonSecondary:
        'text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700',
    buttonSuccess: 'bg-green-600 hover:bg-green-700 text-white',
    buttonWarning: 'bg-orange-500 hover:bg-orange-600 text-white',
    buttonDanger: 'bg-red-500 hover:bg-red-600 text-white',

    // Border Colors
    borderColor: 'border-gray-200',
    borderMedium: 'border-gray-300',
    borderBlue: 'border-blue-200',

    // Gradients
    gradientPrimary: 'bg-gradient-to-r from-blue-600 to-purple-600',
    gradientSecondary: 'bg-gradient-to-r from-indigo-500 to-purple-600',

    // Design Elements
    borderRadius: 'rounded-lg',
    borderRadiusSm: 'rounded',
    borderRadiusXl: 'rounded-xl',
    boxShadow: 'shadow-lg',
    boxShadowSm: 'shadow-md',
    boxShadowXl: 'shadow-xl',

    // Typography
    fontFamily: {
        primary: 'font-primary',
        secondary: 'font-secondary',
    },
    fontSize: 'text-base',
    fontSizeSm: 'text-sm',
    fontSizeLg: 'text-lg',
    fontSizeXl: 'text-xl',
    fontSize2Xl: 'text-2xl',
    fontSize3Xl: 'text-3xl',
    fontWeight: 'font-normal',
    fontWeightMedium: 'font-medium',
    fontWeightSemibold: 'font-semibold',
    fontWeightBold: 'font-bold',
    lineHeight: 'leading-normal',
    lineHeightRelaxed: 'leading-relaxed',

    // Spacing
    spacing: 'p-4',
    spacingSm: 'p-2',
    spacingLg: 'p-6',
    spacingXl: 'p-8',
    margin: 'm-4',
    marginSm: 'm-2',
    marginLg: 'm-6',

    // Z-Index
    zIndex: {
        dropdown: 'z-10',
        modal: 'z-20',
        tooltip: 'z-30',
        overlay: 'z-40',
        navigation: 'z-50',
    },

    // Status Colors
    status: {
        success: 'text-green-600',
        warning: 'text-amber-500',
        error: 'text-red-500',
        info: 'text-blue-600',
    },

    // Status Backgrounds
    statusBg: {
        success: 'bg-green-50',
        warning: 'bg-amber-50',
        error: 'bg-red-50',
        info: 'bg-blue-50',
    },
};

// Helper functions for easier usage
export function getThemeClass(key: keyof typeof themeConfig) {
    return themeConfig[key];
}

// Button styles helper function
export function getButtonClass(
    variant:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger' = 'primary'
) {
    const baseClasses =
        'px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        primary: themeConfig.buttonPrimary + ' focus:ring-blue-500',
        secondary: themeConfig.buttonSecondary + ' focus:ring-blue-500',
        success: themeConfig.buttonSuccess + ' focus:ring-green-500',
        warning: themeConfig.buttonWarning + ' focus:ring-orange-500',
        danger: themeConfig.buttonDanger + ' focus:ring-red-500',
    };

    return `${baseClasses} ${variantClasses[variant]}`;
}

// Text colors helper function
export function getTextClass(
    variant: 'primary' | 'secondary' | 'muted' | 'light' | 'white' = 'primary'
) {
    const textClasses = {
        primary: themeConfig.textPrimary,
        secondary: themeConfig.textSecondary,
        muted: themeConfig.textMuted,
        light: themeConfig.textLight,
        white: themeConfig.textWhite,
    };

    return textClasses[variant];
}

// Status indicator helper function
export function getStatusClass(
    status: 'success' | 'warning' | 'error' | 'info',
    withBackground = false
) {
    if (withBackground) {
        return `${themeConfig.status[status]} ${themeConfig.statusBg[status]} px-3 py-1 rounded-full text-sm font-medium`;
    }
    return themeConfig.status[status];
}

// Card component helper function
export function getCardClass(shadow: 'sm' | 'md' | 'lg' | 'xl' = 'md') {
    const shadowClasses = {
        sm: themeConfig.boxShadowSm,
        md: themeConfig.boxShadow,
        lg: themeConfig.boxShadow,
        xl: themeConfig.boxShadowXl,
    };

    return `${themeConfig.backgroundColor} ${themeConfig.borderRadius} ${shadowClasses[shadow]} ${themeConfig.borderColor} border`;
}
