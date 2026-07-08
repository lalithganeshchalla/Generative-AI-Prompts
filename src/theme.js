export const categoryTheme = {
  All:      { grad: 'linear-gradient(135deg, #7C3AED, #EC4899)', solid: '#7C3AED' },
  Men:      { grad: 'linear-gradient(135deg, #7C3AED, #4F46E5)', solid: '#7C3AED' },
  Women:    { grad: 'linear-gradient(135deg, #EC4899, #F472B6)', solid: '#EC4899' },
  Couples:  { grad: 'linear-gradient(135deg, #F97316, #FBBF24)', solid: '#F97316' },
  Kids:     { grad: 'linear-gradient(135deg, #14B8A6, #22D3EE)', solid: '#14B8A6' },
  Animals:  { grad: 'linear-gradient(135deg, #84CC16, #22C55E)', solid: '#84CC16' },
};

export const getCategoryStyle = (label) => categoryTheme[label] || categoryTheme.All;