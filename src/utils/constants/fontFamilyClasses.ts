const fontFamilyClasses = ['poppins', 'inter'] as const;

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];
