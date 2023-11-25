import pandas as pd

df = pd.DataFrame({
    'Fruit': ['Apple', 'Apple','Banana', 'Lemon','Orange', 'Pineapple', 'Watermelon', 'Orange']
})
df['Cost'] = 1
# option context with mode chained assignment removes the optional warning message about modifying a copy of dataFrame
# pd.options.mode.chained_assignment = None <- The non-fuction global scope version of below
with pd.option_context('mode.chained_assignment', None):
    df['Cost'].iloc[0:2] = 5
    df['Cost'].iloc[3] = 3
    df['Cost'].iloc[4] = 4
cost_increase = lambda x: x*2 + 1
first_letter = lambda x: str(x.Fruit[0]) + str(x.Fruit[-1]).upper() + str(len(x.Fruit))
# print(df)
df['Cost'] = df.Cost.apply(cost_increase)
df['Code'] = df.apply(first_letter, axis = 1)
print(df.groupby('Fruit'))
print(df)
# print(df.Fruit[-1])
