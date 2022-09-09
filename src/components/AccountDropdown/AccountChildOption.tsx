import { type MenuItemOptionProps, forwardRef, MenuItemOption, Stack } from '@chakra-ui/react'
import { Amount } from 'components/Amount/Amount'
import { RawText } from 'components/Text'

type AccountChildRowProps = {
  title: string
  cryptoBalance: string
  symbol: string
} & MenuItemOptionProps

export const AccountChildOption = forwardRef<AccountChildRowProps, 'button'>(
  ({ title, cryptoBalance, symbol, children, ...props }, ref) => (
    <MenuItemOption ref={ref} {...props}>
      <Stack direction='row' justifyContent='space-between' fontSize='sm' spacing={4}>
        <RawText fontWeight='bold' whiteSpace='nowrap'>
          {title}
        </RawText>
        <Amount.Crypto
          whiteSpace='nowrap'
          color='gray.500'
          fontWeight='medium'
          value={cryptoBalance}
          symbol={symbol}
        />
      </Stack>
      {children}
    </MenuItemOption>
  ),
)

AccountChildOption.id = 'MenuItemOption'