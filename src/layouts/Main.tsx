import { Box } from '~/components/Box'

export const Main: React.FC = ({ children }) => {
  return (
    <Box
      css={{
        backgroundColor: '$background',
        color: '$text',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box as="main">{children}</Box>
    </Box>
  )
}
