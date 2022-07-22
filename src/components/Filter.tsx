import { Text, Button, IButtonProps, useTheme } from 'native-base';

//extend todas as opções que o IBUTTONPROPS tem para utilizar na aplicação
type Props = IButtonProps & {
  //Titulo do filtro (Abertos ou Encerrados)
  title: string;
  //saber se está ativo (? - opcional)
  isActive?: boolean;
  //está aberto | fechado
  type: 'open' | 'closed';
}
                                                       //restante
export function Filter({ title, isActive = false, type, ...rest}: Props) {
  const {colors} = useTheme();

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];
  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text color={isActive ? colorType : "gray.300"} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
}