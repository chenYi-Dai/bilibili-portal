export interface ListResult {
  list: Array<ListModel>;
}
export interface ListModel {
  callSystemId: number; //调用系统ID
  callName: string; //调用系统名称
  authInterfaceFlag: number; //接口授权开关 0-关闭 1-开启
  keyVerSign: number; //算法版本（加解签）
  status: number; //状态1.正常 2 禁用
  createTime: Date; //创建时间
}

export interface CardListResult {
  list: Array<CardList>;
}
export interface CardList {
  banner: string;
  description: string;
  index: number;
  isSetup: boolean;
  name: string;
  type: number;
}
