export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasPrevPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
};

export type BasePaginationMeta = {
  __typename?: 'BasePaginationMeta';
  itemCount: Scalars['Float'];
  totalItems: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalPages: Scalars['Float'];
  currentPage: Scalars['Float'];
};

export type Reply = Node & {
  __typename?: 'Reply';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content: Scalars['String'];
  inquiry: Inquiry;
};

/** Node */
export type Node = {
  id: Scalars['ID'];
};

export type Inquiry = Node & {
  __typename?: 'Inquiry';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  inquiryRole: Scalars['String'];
  status: InquiryStatus;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  reply?: Maybe<Reply>;
  inquiryCode: Scalars['String'];
  images?: Maybe<Array<Scalars['String']>>;
  imagePaths?: Maybe<Array<Scalars['String']>>;
};

export enum InquiryStatus {
  REQUEST = 'REQUEST',
  REPLY = 'REPLY',
  REJECT = 'REJECT',
}

export type InquiryConnection = {
  __typename?: 'InquiryConnection';
  items?: Maybe<Array<Inquiry>>;
  meta: BasePaginationMeta;
};

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  interestTag?: Maybe<Array<Scalars['String']>>;
  website?: Maybe<Scalars['String']>;
  instagramId?: Maybe<Scalars['String']>;
  userCode?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  businessNumber?: Maybe<Scalars['String']>;
  businessEmail?: Maybe<Scalars['String']>;
  businessLocation?: Maybe<Scalars['String']>;
  isNew?: Maybe<Scalars['Boolean']>;
  kakaoId?: Maybe<Scalars['String']>;
  naverId?: Maybe<Scalars['String']>;
  appleId?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  receiveEmail?: Maybe<Scalars['Boolean']>;
  receiveMarketing?: Maybe<Scalars['Boolean']>;
  receiveSNS?: Maybe<Scalars['Boolean']>;
  inquiries?: Maybe<Array<Inquiry>>;
  bankName?: Maybe<Scalars['String']>;
  bankNumber?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status?: Maybe<RequestStatusEnum>;
  avatarFilePath?: Maybe<Scalars['String']>;
  myStore?: Maybe<Store>;
  totalSales?: Maybe<Scalars['Float']>;
  totalSettlement?: Maybe<Scalars['Float']>;
};

export enum RequestStatusEnum {
  REQUEST = 'REQUEST',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export type UserConnection = {
  __typename?: 'UserConnection';
  items?: Maybe<Array<User>>;
  meta: BasePaginationMeta;
};

export type Store = Node & {
  __typename?: 'Store';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  openTime?: Maybe<Scalars['String']>;
  closeTime?: Maybe<Scalars['String']>;
  workDay?: Maybe<Scalars['String']>;
  totalLike: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isLike?: Maybe<Scalars['Boolean']>;
  bestProduct?: Maybe<Array<Product>>;
  reviewProductOfStore?: Maybe<ReviewConnection>;
  mainMedia?: Maybe<Media>;
  allProduct?: Maybe<ProductConnection>;
  getPickSlot?: Maybe<Array<PickSlot>>;
  ownerInfo?: Maybe<User>;
};

export type StoreConnection = {
  __typename?: 'StoreConnection';
  items?: Maybe<Array<Store>>;
  meta: BasePaginationMeta;
};

export type HomeData = {
  __typename?: 'HomeData';
  todayOrder: Scalars['Float'];
  totalPickup: Scalars['Float'];
  weeklyRevenue: Scalars['Float'];
  newReview: Scalars['Float'];
  sellingProduct: Scalars['Float'];
};

export type Request = Node & {
  __typename?: 'Request';
  id: Scalars['ID'];
  userId: Scalars['String'];
  status: RequestStatusEnum;
};

export type UserMetadata = Node & {
  __typename?: 'UserMetadata';
  id: Scalars['ID'];
  user: Scalars['String'];
  pickupNotifify: Scalars['Boolean'];
  reviewCommentNotify: Scalars['Boolean'];
  createReviewNotify: Scalars['Boolean'];
  eventNotify: Scalars['Boolean'];
  responseNotify: Scalars['Boolean'];
  orderNotify: Scalars['Boolean'];
  settlementNotify: Scalars['Boolean'];
  inquiryNotify: Scalars['Boolean'];
};

export type MailHash = Node & {
  __typename?: 'MailHash';
  id: Scalars['ID'];
  email: Scalars['String'];
  hash: Scalars['String'];
};

export type Media = Node & {
  __typename?: 'Media';
  id: Scalars['ID'];
  fileSize?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  filePath?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  width: Scalars['Float'];
  isDeleted: Scalars['Boolean'];
  ownerId?: Maybe<Scalars['String']>;
  type: FileType;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  laundryId?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  capabilities?: Maybe<MediaCapability>;
};

export enum FileType {
  FILE = 'FILE',
  DIR = 'DIR',
}

export type MediaConnection = {
  __typename?: 'MediaConnection';
  items?: Maybe<Array<Media>>;
  meta: BasePaginationMeta;
};

export type MediaCapability = {
  __typename?: 'MediaCapability';
  canCopy?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
  canDownload?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canRename?: Maybe<Scalars['Boolean']>;
};

export type PickSlot = Node & {
  __typename?: 'PickSlot';
  id: Scalars['ID'];
  storeId: Scalars['String'];
  type: PickSlotType;
  numberOfCakes: Scalars['Float'];
  openTime?: Maybe<Scalars['DateTime']>;
  closeTime?: Maybe<Scalars['DateTime']>;
  selected?: Maybe<Array<Scalars['DateTime']>>;
  gap?: Maybe<Scalars['Float']>;
  startBreak?: Maybe<Scalars['DateTime']>;
  endBreak?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  storeInfo: Store;
};

export enum PickSlotType {
  TOTAL = 'TOTAL',
  TIMELY = 'TIMELY',
}

export type PickSlotConnection = {
  __typename?: 'PickSlotConnection';
  items?: Maybe<Array<PickSlot>>;
  meta: BasePaginationMeta;
};

export type FavoriteStore = Node & {
  __typename?: 'FavoriteStore';
  id: Scalars['ID'];
  userId: Scalars['String'];
  storeId: Scalars['String'];
};

export type Product = Node & {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbImage?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  isBest: Scalars['Boolean'];
  isSelling: Scalars['Boolean'];
  images?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  caution: Scalars['String'];
  storeId: Scalars['String'];
  totalLike: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isLike?: Maybe<Scalars['Boolean']>;
  storeInfo?: Maybe<Store>;
  comments?: Maybe<ReviewConnection>;
  mainMedia?: Maybe<Media>;
  media?: Maybe<Array<Media>>;
  pickSlot?: Maybe<Array<PickSlot>>;
  option?: Maybe<Array<Option>>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  items?: Maybe<Array<Product>>;
  meta: BasePaginationMeta;
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  userId: Scalars['String'];
  storeId: Scalars['String'];
  productId: Scalars['String'];
  optionId?: Maybe<Array<Scalars['String']>>;
  customerName?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
  hasReview: Scalars['Boolean'];
  status: Scalars['String'];
  pickUpTime?: Maybe<Scalars['DateTime']>;
  commission: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productInfo?: Maybe<Product>;
  paymentDate?: Maybe<Scalars['DateTime']>;
  reviewInfo?: Maybe<Review>;
  userInfo?: Maybe<User>;
  storeInfo?: Maybe<Store>;
  optionInfo?: Maybe<Array<Option>>;
  userTotalOrder: Scalars['Float'];
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  items?: Maybe<Array<Order>>;
  meta: BasePaginationMeta;
};

export type Review = Node & {
  __typename?: 'Review';
  id: Scalars['ID'];
  userId: Scalars['String'];
  productId: Scalars['String'];
  orderId: Scalars['String'];
  content: Scalars['String'];
  scoreFlavor: Scalars['String'];
  scoreDesign: Scalars['String'];
  totalScore: Scalars['Float'];
  image?: Maybe<Array<Scalars['String']>>;
  reply?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  mediaInfo: Array<Media>;
  productInfo: Product;
  user: User;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  items?: Maybe<Array<Review>>;
  meta: BasePaginationMeta;
};

export type Reports = Node & {
  __typename?: 'Reports';
  id: Scalars['ID'];
  storeId: Scalars['String'];
  pickUpTime: Scalars['String'];
  totalOrder: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  totalSales: Scalars['Float'];
  storeInfo?: Maybe<Store>;
  ownerInfo?: Maybe<User>;
};

export type PartnerReport = {
  __typename?: 'PartnerReport';
  totalCake: Scalars['Float'];
  totalSales: Scalars['Float'];
  averageSales: Scalars['Float'];
  weekNumber: Scalars['Float'];
  totalWork: Scalars['Float'];
};

export type PartnerTotalReport = {
  __typename?: 'PartnerTotalReport';
  totalCake: Scalars['Float'];
  totalSales: Scalars['Float'];
  averageSales: Scalars['Float'];
  weekNumber: Scalars['Float'];
  totalWork: Scalars['Float'];
  averageSalesOnYear: Scalars['Float'];
};

export type PaginationMeta = {
  __typename?: 'PaginationMeta';
  itemCount: Scalars['Float'];
  totalItems: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalPages: Scalars['Float'];
  currentPage: Scalars['Float'];
};

export type ReportConnection = {
  __typename?: 'ReportConnection';
  items?: Maybe<Array<Reports>>;
  meta: PaginationMeta;
};

export type Notification = Node & {
  __typename?: 'Notification';
  id: Scalars['ID'];
  source?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  content: Scalars['String'];
  userId: Scalars['String'];
  isSeen: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  timeSend?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  sourceInfo?: Maybe<User>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  items?: Maybe<Array<Notification>>;
  meta: BasePaginationMeta;
};

export type FcmToken = Node & {
  __typename?: 'FcmToken';
  id: Scalars['ID'];
  userId: Scalars['String'];
  token: Scalars['String'];
  deviceId?: Maybe<Scalars['String']>;
};

export type NotifyContent = Node & {
  __typename?: 'NotifyContent';
  id: Scalars['ID'];
  timeSend: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  notification: ENotification;
};

export type ENotification = Node & {
  __typename?: 'ENotification';
  id: Scalars['ID'];
  type: Scalars['String'];
  role: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  details?: Maybe<Array<NotifyContent>>;
};

export type Option = Node & {
  __typename?: 'Option';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  price: Scalars['Float'];
  required: Scalars['Boolean'];
  productId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FavoriteProduct = Node & {
  __typename?: 'FavoriteProduct';
  id: Scalars['ID'];
  productId: Scalars['String'];
  userId: Scalars['String'];
};

export type Event = Node & {
  __typename?: 'Event';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentDetails?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  eventCode?: Maybe<Scalars['String']>;
  imagePaths?: Maybe<Array<Scalars['String']>>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  items?: Maybe<Array<Event>>;
  meta: BasePaginationMeta;
};

export type Transaction = Node & {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  orderId: Scalars['String'];
  receiptId: Scalars['String'];
  productName: Scalars['String'];
  value: Scalars['Float'];
  customerName: Scalars['String'];
  customerPhone: Scalars['String'];
  customerEmail: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  paymentMethod?: Maybe<PaymentMethodEnum>;
  result: TransactionResultEnum;
};

export enum PaymentMethodEnum {
  KAKAO = 'kakao',
  NPAY = 'npay',
  VBANK = 'vbank',
  CARD = 'card',
}

export enum TransactionResultEnum {
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type Settlement = Node & {
  __typename?: 'Settlement';
  id: Scalars['ID'];
  storeId: Scalars['String'];
  amount: Scalars['Float'];
  expectedSettlementDate: Scalars['DateTime'];
  isDone: Scalars['Boolean'];
  payment: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  storeInfo: Store;
};

export type SettlementConnection = {
  __typename?: 'SettlementConnection';
  items?: Maybe<Array<Settlement>>;
  meta: BasePaginationMeta;
};

export type Category = Node & {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  parent: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  children: Array<Category>;
};

/** AuthConnection */
export type AuthConnection = {
  __typename?: 'AuthConnection';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  user: User;
};

export type Sample = Node & {
  __typename?: 'Sample';
  id: Scalars['ID'];
  views: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  isPublished: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Faq = Node & {
  __typename?: 'FAQ';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentDetails?: Maybe<Scalars['String']>;
  faqRole?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  faqCode?: Maybe<Scalars['String']>;
};

export type FaqConnection = {
  __typename?: 'FAQConnection';
  items?: Maybe<Array<Faq>>;
  meta: BasePaginationMeta;
};

export type Notice = Node & {
  __typename?: 'Notice';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetails?: Maybe<Scalars['String']>;
  noticeRoles: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  noticeCode: Scalars['String'];
};

export type NoticeConnection = {
  __typename?: 'NoticeConnection';
  items?: Maybe<Array<Notice>>;
  meta: BasePaginationMeta;
};

export type Location = Node & {
  __typename?: 'Location';
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  status: Scalars['Boolean'];
  index: Scalars['String'];
  children?: Maybe<Array<Location>>;
};

export type Banner = Node & {
  __typename?: 'Banner';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentDetail: Scalars['String'];
  bannerCode?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  position: Scalars['Float'];
};

export type Chat = Node & {
  __typename?: 'Chat';
  id: Scalars['ID'];
  userId: Scalars['String'];
  storeId: Scalars['String'];
  hasMessage: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  storeInfo?: Maybe<Store>;
  unReadMessage: Scalars['Float'];
  lastMessage?: Maybe<Message>;
  userInfo?: Maybe<User>;
};

export type ChatConnection = {
  __typename?: 'ChatConnection';
  items?: Maybe<Array<Chat>>;
  meta: BasePaginationMeta;
};

export type Message = Node & {
  __typename?: 'Message';
  id: Scalars['ID'];
  senderId: Scalars['String'];
  message: Scalars['String'];
  isRead?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  chatId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  senderInfo?: Maybe<User>;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  items?: Maybe<Array<Message>>;
  meta: BasePaginationMeta;
};

export type CreateNewMessageType = {
  __typename?: 'CreateNewMessageType';
  message: Message;
};

export type DataDashboard = {
  __typename?: 'DataDashboard';
  total?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  currentDay?: Maybe<Scalars['String']>;
  firstDayOfWeek?: Maybe<Scalars['String']>;
  lastDayOfWeek?: Maybe<Scalars['String']>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  userDashboard: DataDashboard;
  inquiryDashboard: DataDashboard;
  todaySalesDashboard: DataDashboard;
  currentWeekSales: DataDashboard;
  currentWeekStoreSales: DataDashboard;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  isAvailable: Scalars['String'];
  user?: Maybe<User>;
  users?: Maybe<UserConnection>;
  getPopularSearchKey?: Maybe<Array<Scalars['String']>>;
  medias?: Maybe<MediaConnection>;
  media?: Maybe<Media>;
  getPartners?: Maybe<UserConnection>;
  getStores: StoreConnection;
  getStoresAroundMe: StoreConnection;
  storeDetail?: Maybe<Store>;
  myStore?: Maybe<Store>;
  getFavoriteStore: StoreConnection;
  getPickUpOfStore: PickSlotConnection;
  getHomeData: HomeData;
  getCategories: Array<Category>;
  getRecommendProduct: ProductConnection;
  getRandomProduct: ProductConnection;
  getPopularProduct: ProductConnection;
  getProductAroundMe: ProductConnection;
  getProducts: ProductConnection;
  getProductDetail?: Maybe<Product>;
  getFavoriteProducts: ProductConnection;
  myProduct: ProductConnection;
  getProductOfStore: ProductConnection;
  getListReview: ReviewConnection;
  getListReviewOfProduct: ReviewConnection;
  getReviews: ReviewConnection;
  myReview?: Maybe<ReviewConnection>;
  getReviewForPartner: ReviewConnection;
  getReviewDetails: Review;
  getListOrder: OrderConnection;
  getListOrderReviewed: OrderConnection;
  getAllOrder: OrderConnection;
  getOrderDetails: Order;
  getAllOrderMyStore: OrderConnection;
  getAllOrderSameProduct: OrderConnection;
  getAllOrderInDay: OrderConnection;
  getOrderBySettlement: OrderConnection;
  getTransactionDetail?: Maybe<Transaction>;
  getOrderLastTransaction?: Maybe<Transaction>;
  getNotifications: NotificationConnection;
  countUnseenNotification: Scalars['Float'];
  getSettlements: SettlementConnection;
  getSettlementByStoreId: SettlementConnection;
  getStoreReportOfMonth?: Maybe<Array<Reports>>;
  getStoreReportOfWeekly: PartnerReport;
  getStoreReportOfYear: PartnerTotalReport;
  getReports: ReportConnection;
  getPickSlotDetails: Array<PickSlot>;
  getPickSlots: Array<PickSlot>;
  myMetadata: UserMetadata;
  verifyResetLink?: Maybe<MailHash>;
  getLocation: Array<Location>;
  getNoticeDetails: Notice;
  notices?: Maybe<NoticeConnection>;
  FAQs?: Maybe<FaqConnection>;
  FAQDetails?: Maybe<Faq>;
  getEventDetails: Event;
  events?: Maybe<EventConnection>;
  inquiries?: Maybe<InquiryConnection>;
  getInquiryDetails: Inquiry;
  myInquiries?: Maybe<InquiryConnection>;
  banners?: Maybe<Array<Banner>>;
  bannerDetail?: Maybe<Banner>;
  enotifications: Array<ENotification>;
  getNotifyContentDetail: NotifyContent;
  getDashboard: Dashboard;
  getListChat: ChatConnection;
  getChatDetailById: Chat;
  getListMessages: MessageConnection;
};

export type QueryIsAvailableArgs = {
  value: Scalars['String'];
  key: DuplicateCheckKey;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortTypes>;
  typeUser?: Maybe<GetUserType>;
  searchCriteria?: Maybe<UserFilterCriteria>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryMediasArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['String']>;
};

export type QueryMediaArgs = {
  id: Scalars['String'];
};

export type QueryGetPartnersArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sorts?: Maybe<SortTypes>;
  roles?: Maybe<AppRoles>;
  status?: Maybe<RequestStatusEnum>;
  searchCriteria?: Maybe<PartnerFilterCriteria>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryGetStoresArgs = {
  conditions?: Maybe<Scalars['String']>;
  sortField?: Maybe<SortFieldEnum>;
  district?: Maybe<Array<Scalars['String']>>;
  pickTime?: Maybe<Array<Scalars['String']>>;
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetStoresAroundMeArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryStoreDetailArgs = {
  userId: Scalars['String'];
};

export type QueryGetFavoriteStoreArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetPickUpOfStoreArgs = {
  storeId: Scalars['String'];
};

export type QueryGetCategoriesArgs = {
  parent?: Maybe<Scalars['String']>;
};

export type QueryGetRecommendProductArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetRandomProductArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetPopularProductArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetProductAroundMeArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  category: Scalars['String'];
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetProductsArgs = {
  condition?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  sortField?: Maybe<SortFieldEnum>;
  district?: Maybe<Array<Scalars['String']>>;
  pickTime?: Maybe<Array<Scalars['String']>>;
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetProductDetailArgs = {
  productId: Scalars['String'];
};

export type QueryGetFavoriteProductsArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryMyProductArgs = {
  isBest?: Maybe<Scalars['Boolean']>;
  subCategory?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  page: Scalars['Float'];
  limit: Scalars['Float'];
  storeId: Scalars['String'];
};

export type QueryGetProductOfStoreArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
  storeId: Scalars['String'];
};

export type QueryGetListReviewArgs = {
  storeId: Scalars['String'];
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetListReviewOfProductArgs = {
  orderBy: SortReviewEnum;
  sorts: SortTypes;
  productId: Scalars['String'];
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetReviewsArgs = {
  storeId: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sorts?: Maybe<SortTypes>;
  orderBy?: Maybe<SortReviewEnum>;
  searchCriteria?: Maybe<ReviewFilterCriteria>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryMyReviewArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetReviewForPartnerArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type QueryGetReviewDetailsArgs = {
  reviewId: Scalars['String'];
};

export type QueryGetListOrderArgs = {
  status?: Maybe<OrderStatus>;
  hasReview?: Maybe<Scalars['Boolean']>;
  orderIds?: Maybe<Array<Scalars['String']>>;
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetListOrderReviewedArgs = {
  isReviewed?: Maybe<Scalars['Boolean']>;
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetAllOrderArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortType?: Maybe<OrderSortType>;
  sortColumn?: Maybe<OrderSortColum>;
  searchOptions?: Maybe<OrderSearchOptions>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryGetOrderDetailsArgs = {
  id: Scalars['String'];
};

export type QueryGetAllOrderMyStoreArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryGetAllOrderSameProductArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  searchKey?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  storeId: Scalars['String'];
};

export type QueryGetAllOrderInDayArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  sortType?: Maybe<OrderSortType>;
  sortColumn?: Maybe<OrderSortColum>;
  searchOptions?: Maybe<OrderSearchOptions>;
  searchKey?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
};

export type QueryGetOrderBySettlementArgs = {
  sortDirection?: Maybe<OrderSettlementSortDirection>;
  sortField?: Maybe<OrderSettlementSortField>;
  searchField?: Maybe<OrderSettlementField>;
  searchKey: Scalars['String'];
  type: SettlementGetType;
  settlementId: Scalars['String'];
  storeId: Scalars['String'];
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetTransactionDetailArgs = {
  id: Scalars['String'];
};

export type QueryGetOrderLastTransactionArgs = {
  requestTime: Scalars['String'];
  orderId: Scalars['String'];
};

export type QueryGetNotificationsArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetSettlementsArgs = {
  searchField: SettlementSearchField;
  searchKey: Scalars['String'];
  type: SettlementGetType;
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetSettlementByStoreIdArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
  storeId: Scalars['String'];
};

export type QueryGetStoreReportOfMonthArgs = {
  month?: Maybe<Scalars['String']>;
};

export type QueryGetStoreReportOfWeeklyArgs = {
  day: Scalars['DateTime'];
};

export type QueryGetStoreReportOfYearArgs = {
  day: Scalars['DateTime'];
};

export type QueryGetReportsArgs = {
  type: ReportGetType;
  searchField: ReportSearchKey;
  searchKey: Scalars['String'];
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryGetPickSlotDetailsArgs = {
  pickUpTime: Scalars['DateTime'];
};

export type QueryGetPickSlotsArgs = {
  month: Scalars['DateTime'];
};

export type QueryVerifyResetLinkArgs = {
  hash: Scalars['String'];
};

export type QueryGetLocationArgs = {
  searchKey?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
};

export type QueryGetNoticeDetailsArgs = {
  id: Scalars['String'];
};

export type QueryNoticesArgs = {
  limit?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  sortColumn?: Maybe<NoticeSortColumn>;
  sortDirection?: Maybe<SortTypes>;
  noticeRole: CmsRoles;
  searchOptions?: Maybe<NoticeFindColumn>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryFaQsArgs = {
  limit?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  sorts?: Maybe<SortTypes>;
  roles: CmsRoles;
  searchOptions?: Maybe<FaqFindColumn>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryFaqDetailsArgs = {
  id: Scalars['String'];
};

export type QueryGetEventDetailsArgs = {
  id: Scalars['String'];
};

export type QueryEventsArgs = {
  limit?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  sortColumn?: Maybe<EventSortColumn>;
  sortDirection?: Maybe<SortTypes>;
  searchOptions?: Maybe<EventFindColumn>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryInquiriesArgs = {
  limit?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  sorts?: Maybe<SortTypes>;
  roles: CmsRoles;
  searchOptions?: Maybe<InquiryFindColumn>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryGetInquiryDetailsArgs = {
  inquiryId: Scalars['String'];
};

export type QueryMyInquiriesArgs = {
  page: Scalars['Float'];
  limit: Scalars['Float'];
};

export type QueryBannerDetailArgs = {
  id: Scalars['String'];
};

export type QueryEnotificationsArgs = {
  role: CmsRoles;
  searchUserOptions?: Maybe<ENotificationSearch>;
  searchPartnerOptions?: Maybe<ENotificationPartnerSearch>;
  searchKey?: Maybe<Scalars['String']>;
};

export type QueryGetNotifyContentDetailArgs = {
  id: Scalars['String'];
};

export type QueryGetListChatArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type QueryGetChatDetailByIdArgs = {
  chatId: Scalars['String'];
};

export type QueryGetListMessagesArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
  chatId: Scalars['String'];
};

export enum DuplicateCheckKey {
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  NICKNAME = 'NICKNAME',
}

export enum SortTypes {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum GetUserType {
  NEW = 'NEW',
  ALL = 'ALL',
  TODAY = 'TODAY',
}

export enum UserFilterCriteria {
  MEMBER_ID = 'MEMBER_ID',
  NAME = 'NAME',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  ALL = 'ALL',
}

export enum AppRoles {
  ALL = 'ALL',
  ADMIN = 'ADMIN',
  USER = 'USER',
  PARTNER = 'PARTNER',
}

export enum PartnerFilterCriteria {
  PARTNER_ID = 'PARTNER_ID',
  NAME = 'NAME',
  EMAIL = 'EMAIL',
  PHONE = 'PHONE',
  STORENAME = 'STORENAME',
  BUSINESSNUMBER = 'BUSINESSNUMBER',
  WEBSITE = 'WEBSITE',
  LOCATION = 'LOCATION',
  ALL = 'ALL',
}

export enum SortFieldEnum {
  LIKE = 'LIKE',
  CREATED = 'CREATED',
}

export enum SortReviewEnum {
  DATE = 'DATE',
  SCORE = 'SCORE',
}

export enum ReviewFilterCriteria {
  USER_ID = 'USER_ID',
  CONTENT = 'CONTENT',
  FLAVOR_SCORE = 'FLAVOR_SCORE',
  DESIGN_SCORE = 'DESIGN_SCORE',
  ALL = 'ALL',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  WAIT_FOR_PAY = 'WAIT_FOR_PAY',
  PAYMENT_COMPLETED = 'PAYMENT_COMPLETED',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

export enum OrderSortType {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum OrderSortColum {
  USER_CREATED = 'USER_CREATED',
  ORDER_DATE = 'ORDER_DATE',
  ORDER_PICKUP_DATE = 'ORDER_PICKUP_DATE',
}

export enum OrderSearchOptions {
  ALL = 'ALL',
  USER_ID = 'USER_ID',
  USER_NAME = 'USER_NAME',
  EMAIL = 'EMAIL',
  PHONE_NUMBER = 'PHONE_NUMBER',
  CAKE_TYPE = 'CAKE_TYPE',
  STORE_NAME = 'STORE_NAME',
  VALUE = 'VALUE',
}

export enum OrderSettlementSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum OrderSettlementSortField {
  ORDER_DATE = 'ORDER_DATE',
  PICKUP_DATE = 'PICKUP_DATE',
  USER_REGISTRATION_DATE = 'USER_REGISTRATION_DATE',
}

export enum OrderSettlementField {
  ALL = 'ALL',
  USER_ID = 'USER_ID',
  USER_NAME = 'USER_NAME',
  EMAIL = 'EMAIL',
  PHONE_NUMBER = 'PHONE_NUMBER',
  PRODUCT_NAME = 'PRODUCT_NAME',
  STORE_NAME = 'STORE_NAME',
  VALUE = 'VALUE',
}

export enum SettlementGetType {
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  ALL = 'ALL',
}

export enum SettlementSearchField {
  NAME = 'NAME',
  OWNER_NAME = 'OWNER_NAME',
  BANK_NUMBER = 'BANK_NUMBER',
  ADDRESS = 'ADDRESS',
  PHONE = 'PHONE',
  ALL = 'ALL',
}

export enum ReportGetType {
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  ALL = 'ALL',
}

export enum ReportSearchKey {
  NAME = 'NAME',
  OWNER_NAME = 'OWNER_NAME',
  BANK_NUMBER = 'BANK_NUMBER',
  ADDRESS = 'ADDRESS',
  PHONE = 'PHONE',
  ALL = 'ALL',
}

export enum NoticeSortColumn {
  NOTICE_ID = 'NOTICE_ID',
  CREATED_AT = 'CREATED_AT',
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  UPDATED_AT = 'UPDATED_AT',
}

export enum CmsRoles {
  USER = 'USER',
  PARTNER = 'PARTNER',
}

export enum NoticeFindColumn {
  NOTICE_ID = 'NOTICE_ID',
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  ALL = 'ALL',
}

export enum FaqFindColumn {
  FAQ_ID = 'FAQ_ID',
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  ALL = 'ALL',
}

export enum EventSortColumn {
  EVENT_ID = 'EVENT_ID',
  CREATED_AT = 'CREATED_AT',
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  UPDATED_AT = 'UPDATED_AT',
}

export enum EventFindColumn {
  EVENT_ID = 'EVENT_ID',
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  ALL = 'ALL',
}

export enum InquiryFindColumn {
  INQUIRY_ID = 'INQUIRY_ID',
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  USER_NAME = 'USER_NAME',
  USER_EMAIL = 'USER_EMAIL',
  USER_PHONE = 'USER_PHONE',
  ALL = 'ALL',
}

export enum ENotificationSearch {
  ALL = 'ALL',
  PAYMENT = 'PAYMENT',
  PICKUP = 'PICKUP',
  ANSWER = 'ANSWER',
  REVIEW = 'REVIEW',
  EVENT = 'EVENT',
}

export enum ENotificationPartnerSearch {
  ALL = 'ALL',
  ORDER = 'ORDER',
  INQUIRY = 'INQUIRY',
  NOTIFICATION = 'NOTIFICATION',
  REVIEW = 'REVIEW',
  DAILY_PICKUP = 'DAILY_PICKUP',
  SETTLEMENT = 'SETTLEMENT',
}

export type Mutation = {
  __typename?: 'Mutation';
  updateUserInfo: User;
  removeUser: User;
  uploadMedia: Media;
  uploadMediaToS3: Media;
  removeMedia: Media;
  updateMedia: Media;
  createDir: Media;
  updateRequestStatus: Request;
  createStore: Store;
  updateStore: Scalars['Boolean'];
  removeStore: Scalars['Boolean'];
  reactionStore: Scalars['Boolean'];
  updatePartnerInfo: Scalars['Boolean'];
  createUpdateDeleteCategory: Array<Category>;
  removeCategory: Scalars['Boolean'];
  createProduct: Product;
  updateProduct: Scalars['Boolean'];
  reactionProduct: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  writeReview: Review;
  replyReview: Review;
  removeReview: Scalars['Boolean'];
  createOrder: Order;
  confirmOrder?: Maybe<Order>;
  changeOrderStatus: Scalars['Boolean'];
  createTransaction: Transaction;
  updateTransactionStatus?: Maybe<Transaction>;
  saveFcmToken: FcmToken;
  deleteFcmToken: Scalars['Boolean'];
  markSeenNotification: Scalars['Boolean'];
  markSeenNotificationById: Notification;
  checkDone?: Maybe<Settlement>;
  createPickSlot: Scalars['Boolean'];
  updateUserMetadata?: Maybe<UserMetadata>;
  login: AuthConnection;
  register: User;
  partnerRegister: User;
  loginWithSNS: AuthConnection;
  resetPassword: Scalars['Boolean'];
  resetPasswordNoLogin: Scalars['Boolean'];
  sendResetMail: Scalars['Boolean'];
  sendOTP: Scalars['Boolean'];
  validateOTP: Scalars['Boolean'];
  findEmailByPhone: User;
  requestChangePassword: Scalars['String'];
  updatePassword: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  changeStatusLocation: Array<Location>;
  deActiveCity: Array<Location>;
  createNotice: Notice;
  removeNotice: Scalars['Boolean'];
  updateNotice: Scalars['Boolean'];
  createFAQ: Faq;
  removeFaq: Scalars['Boolean'];
  updateFaq: Scalars['Boolean'];
  createEvent: Event;
  removeEvent: Scalars['Boolean'];
  updateEvent: Scalars['Boolean'];
  createInquiry: Inquiry;
  deleteInquiry: Scalars['Boolean'];
  createReplyInquiry: Reply;
  createBanner: Banner;
  updateBanner: Scalars['Boolean'];
  changeBannerPostition: Array<Banner>;
  removeBanner: Scalars['Boolean'];
  updateNotifyContent: Scalars['Boolean'];
  startChat: Chat;
  sendMessage: Message;
  markReadMessage: Scalars['Boolean'];
};

export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInput;
};

export type MutationRemoveUserArgs = {
  userId: Scalars['String'];
};

export type MutationUploadMediaArgs = {
  provider?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  file: Scalars['Upload'];
};

export type MutationUploadMediaToS3Args = {
  parentId?: Maybe<Scalars['ID']>;
  file: Scalars['Upload'];
};

export type MutationRemoveMediaArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type MutationUpdateMediaArgs = {
  input: UpdateMediaInput;
};

export type MutationCreateDirArgs = {
  parentId?: Maybe<Scalars['ID']>;
  dirName: Scalars['String'];
};

export type MutationUpdateRequestStatusArgs = {
  userId: Scalars['String'];
  status: RequestStatusEnum;
};

export type MutationCreateStoreArgs = {
  input: CreateStoreDto;
};

export type MutationUpdateStoreArgs = {
  input: UpdateStoreDto;
};

export type MutationRemoveStoreArgs = {
  id: Scalars['String'];
};

export type MutationReactionStoreArgs = {
  input: CreateFavoriteStoreDto;
};

export type MutationUpdatePartnerInfoArgs = {
  partnerInfo: UpdatePartnerInput;
};

export type MutationCreateUpdateDeleteCategoryArgs = {
  dataDeleteCategory: Array<Scalars['String']>;
  dataUpdateCategory: Array<UpdateCategoryDto>;
  dataCreateCategory: Array<CreateCategoryDto>;
};

export type MutationRemoveCategoryArgs = {
  id: Scalars['String'];
};

export type MutationCreateProductArgs = {
  input: CreateProductDto;
};

export type MutationUpdateProductArgs = {
  input: CreateProductDto;
  id: Scalars['String'];
};

export type MutationReactionProductArgs = {
  input: CreateFavoriteProductDto;
};

export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};

export type MutationWriteReviewArgs = {
  data: CreateReviewDto;
  orderId: Scalars['String'];
  productId: Scalars['String'];
  storeId: Scalars['String'];
};

export type MutationReplyReviewArgs = {
  reply: Scalars['String'];
  id: Scalars['String'];
};

export type MutationRemoveReviewArgs = {
  id: Scalars['String'];
};

export type MutationCreateOrderArgs = {
  input: CreateOrderDto;
  storeId: Scalars['String'];
};

export type MutationConfirmOrderArgs = {
  receiptId: Scalars['String'];
  input: UpdateOrderDto;
};

export type MutationChangeOrderStatusArgs = {
  orderId: Scalars['String'];
  status: OrderStatus;
};

export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};

export type MutationUpdateTransactionStatusArgs = {
  result: TransactionResultEnum;
  id: Scalars['String'];
};

export type MutationSaveFcmTokenArgs = {
  input: SaveFcmTokenInput;
};

export type MutationDeleteFcmTokenArgs = {
  deviceId: Scalars['String'];
};

export type MutationMarkSeenNotificationByIdArgs = {
  id: Scalars['String'];
};

export type MutationCheckDoneArgs = {
  id: Scalars['String'];
};

export type MutationCreatePickSlotArgs = {
  input: CreatePickSlot;
};

export type MutationUpdateUserMetadataArgs = {
  data: UpdateUserMetadataInput;
};

export type MutationLoginArgs = {
  input: LoginEmailInput;
};

export type MutationRegisterArgs = {
  user: UserRegister;
};

export type MutationPartnerRegisterArgs = {
  partner: PartnerRegister;
};

export type MutationLoginWithSnsArgs = {
  input: LoginSnsInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationResetPasswordNoLoginArgs = {
  input: ResetPasswordNoLoginInput;
};

export type MutationSendResetMailArgs = {
  email: Scalars['String'];
};

export type MutationSendOtpArgs = {
  phone: Scalars['String'];
};

export type MutationValidateOtpArgs = {
  code: Scalars['String'];
  phone: Scalars['String'];
};

export type MutationFindEmailByPhoneArgs = {
  code: Scalars['String'];
  phone: Scalars['String'];
  name: Scalars['String'];
};

export type MutationRequestChangePasswordArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  name: Scalars['String'];
};

export type MutationUpdatePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationChangeStatusLocationArgs = {
  parentId: Scalars['String'];
  ids: Array<Scalars['String']>;
};

export type MutationDeActiveCityArgs = {
  id: Scalars['String'];
};

export type MutationCreateNoticeArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  noticeRoles: CmsRoles;
  contentDetails: Scalars['String'];
};

export type MutationRemoveNoticeArgs = {
  id: Scalars['String'];
};

export type MutationUpdateNoticeArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetails: Scalars['String'];
  id: Scalars['String'];
};

export type MutationCreateFaqArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetails: Scalars['String'];
  faqRole: CmsRoles;
};

export type MutationRemoveFaqArgs = {
  id: Scalars['String'];
};

export type MutationUpdateFaqArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetails: Scalars['String'];
  id: Scalars['String'];
};

export type MutationCreateEventArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetails: Scalars['String'];
};

export type MutationRemoveEventArgs = {
  id: Scalars['String'];
};

export type MutationUpdateEventArgs = {
  id: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetails: Scalars['String'];
};

export type MutationCreateInquiryArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  inquiryRole: CmsRoles;
  images?: Maybe<Array<Scalars['String']>>;
};

export type MutationDeleteInquiryArgs = {
  id: Scalars['String'];
};

export type MutationCreateReplyInquiryArgs = {
  inquiryId: Scalars['String'];
  content: Scalars['String'];
};

export type MutationCreateBannerArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type MutationUpdateBannerArgs = {
  id: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type MutationChangeBannerPostitionArgs = {
  banners: Array<ChangeBannerPositionInput>;
};

export type MutationRemoveBannerArgs = {
  id: Scalars['String'];
};

export type MutationUpdateNotifyContentArgs = {
  timeSend: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['String'];
};

export type MutationStartChatArgs = {
  data: CreateChatDto;
};

export type MutationSendMessageArgs = {
  data: CreateMessageInput;
  receiverId: Scalars['String'];
};

export type MutationMarkReadMessageArgs = {
  chatId: Scalars['String'];
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roles?: Maybe<AppRoles>;
  isNew?: Maybe<Scalars['Boolean']>;
  snsToken?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  snsType?: Maybe<SnsTypeEnum>;
  kakaoId?: Maybe<Scalars['String']>;
  naverId?: Maybe<Scalars['String']>;
  appleId?: Maybe<Scalars['String']>;
  receiveEmail?: Maybe<Scalars['Boolean']>;
  receiveMarketing?: Maybe<Scalars['Boolean']>;
  receiveSNS?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
  instagramId?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  businessNumber?: Maybe<Scalars['String']>;
  businessLocation?: Maybe<Scalars['String']>;
  businessEmail?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankNumber?: Maybe<Scalars['String']>;
  interestTag?: Maybe<Array<Scalars['String']>>;
};

export enum SnsTypeEnum {
  KAKAO = 'KAKAO',
  NAVER = 'NAVER',
  APPLE = 'APPLE',
}

export type UpdateMediaInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateStoreDto = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  openTime?: Maybe<Scalars['String']>;
  closeTime?: Maybe<Scalars['String']>;
  workDay?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type UpdateStoreDto = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  openTime?: Maybe<Scalars['String']>;
  closeTime?: Maybe<Scalars['String']>;
  workDay?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
};

export type CreateFavoriteStoreDto = {
  storeId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UpdatePartnerInput = {
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  businessNumber: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  instagramId?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankNumber?: Maybe<Scalars['String']>;
};

export type UpdateCategoryDto = {
  name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type CreateCategoryDto = {
  name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type CreateProductDto = {
  name?: Maybe<Scalars['String']>;
  thumbImage?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  isBest?: Maybe<Scalars['Boolean']>;
  isSelling?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  caution?: Maybe<Scalars['String']>;
  totalLike?: Maybe<Scalars['Float']>;
  options?: Maybe<Array<OptionCreateProduct>>;
};

export type OptionCreateProduct = {
  type: Scalars['String'];
  data: Array<OptionItem>;
  required?: Maybe<Scalars['Boolean']>;
};

export type OptionItem = {
  name: Scalars['String'];
  price: Scalars['String'];
};

export type CreateFavoriteProductDto = {
  productId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type CreateReviewDto = {
  scoreFlavor?: Maybe<ReviewScore>;
  scoreDesign?: Maybe<ReviewScore>;
  content: Scalars['String'];
  image?: Maybe<Array<Scalars['String']>>;
};

export enum ReviewScore {
  SOSO = 'SOSO',
  GOOD = 'GOOD',
  EXCELLENT = 'EXCELLENT',
}

export type CreateOrderDto = {
  customerName?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
  optionId?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<OrderStatus>;
  totalPrice: Scalars['Float'];
  pickUpTime: Scalars['String'];
};

export type UpdateOrderDto = {
  customerName?: Maybe<Scalars['String']>;
  customerPhone?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  optionId?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<OrderStatus>;
  totalPrice?: Maybe<Scalars['Float']>;
  pickUpTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type CreateTransactionInput = {
  orderId: Scalars['String'];
  receiptId: Scalars['String'];
  productName: Scalars['String'];
  value: Scalars['Float'];
  customerName: Scalars['String'];
  customerPhone: Scalars['String'];
  customerEmail: Scalars['String'];
  paymentMethod: PaymentMethodEnum;
  result: TransactionResultEnum;
};

export type SaveFcmTokenInput = {
  token: Scalars['String'];
  deviceId?: Maybe<Scalars['String']>;
};

export type CreatePickSlot = {
  storeId: Scalars['String'];
  type?: Maybe<PickSlotType>;
  slotInfo: Array<SlotInfo>;
};

export type SlotInfo = {
  numberOfCakes: Scalars['Float'];
  gap?: Maybe<Scalars['Float']>;
  openTime: Scalars['DateTime'];
  closeTime: Scalars['DateTime'];
  startBreak?: Maybe<Scalars['DateTime']>;
  endBreak?: Maybe<Scalars['DateTime']>;
};

export type UpdateUserMetadataInput = {
  pickupNotifify?: Maybe<Scalars['Boolean']>;
  reviewCommentNotify?: Maybe<Scalars['Boolean']>;
  createReviewNotify?: Maybe<Scalars['Boolean']>;
  eventNotify?: Maybe<Scalars['Boolean']>;
  responseNotify?: Maybe<Scalars['Boolean']>;
  orderNotify?: Maybe<Scalars['Boolean']>;
  settlementNotify?: Maybe<Scalars['Boolean']>;
  inquiryNotify?: Maybe<Scalars['Boolean']>;
};

export type LoginEmailInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegister = {
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roles: AppRoles;
  isNew?: Maybe<Scalars['Boolean']>;
  snsToken?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  snsType?: Maybe<SnsTypeEnum>;
  kakaoId?: Maybe<Scalars['String']>;
  naverId?: Maybe<Scalars['String']>;
  appleId?: Maybe<Scalars['String']>;
  receiveEmail?: Maybe<Scalars['Boolean']>;
  receiveMarketing?: Maybe<Scalars['Boolean']>;
  receiveSNS?: Maybe<Scalars['Boolean']>;
};

export type PartnerRegister = {
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roles: AppRoles;
  isNew?: Maybe<Scalars['Boolean']>;
  snsToken?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  snsType?: Maybe<SnsTypeEnum>;
  kakaoId?: Maybe<Scalars['String']>;
  naverId?: Maybe<Scalars['String']>;
  appleId?: Maybe<Scalars['String']>;
  receiveEmail?: Maybe<Scalars['Boolean']>;
  receiveMarketing?: Maybe<Scalars['Boolean']>;
  receiveSNS?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
  instagramId?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  businessNumber?: Maybe<Scalars['String']>;
  businessLocation?: Maybe<Scalars['String']>;
  businessEmail?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  bankNumber?: Maybe<Scalars['String']>;
};

export type LoginSnsInput = {
  snsToken?: Maybe<Scalars['String']>;
  snsType: SnsTypeEnum;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  hash: Scalars['String'];
};

export type ResetPasswordNoLoginInput = {
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
};

export type ChangePasswordInput = {
  old_password: Scalars['String'];
  new_password: Scalars['String'];
};

export type ChangeBannerPositionInput = {
  id: Scalars['String'];
  title: Scalars['String'];
  content: Scalars['String'];
  contentDetail: Scalars['String'];
  type: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  position: Scalars['Float'];
  bannerCode: Scalars['String'];
};

export type CreateChatDto = {
  userId: Scalars['String'];
  storeId: Scalars['String'];
};

export type CreateMessageInput = {
  chatId: Scalars['String'];
  message: Scalars['String'];
  type?: Maybe<MessageTypeEnum>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export enum MessageTypeEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export type Subscription = {
  __typename?: 'Subscription';
  onCreateTransaction: Transaction;
  onCreateNewChat: Chat;
  onNewMessage: CreateNewMessageType;
};
