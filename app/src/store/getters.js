const getters = {
  token: state => state.user.token,
  info: state => state.user.info,
  current: state => state.user.current,
  title: state => state.common_config.title,
  abi: state => state.common_config.abi,
  abiB: state => state.common_config.abiB,
  contractAddr: state => state.common_config.contractAddr,
  contractBirth: state => state.common_config.contractBirth
};
export default getters
