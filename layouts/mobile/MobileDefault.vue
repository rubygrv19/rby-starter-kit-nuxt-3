<template>
	<ion-page>
		<ion-content>
			<ion-tabs>
				<ion-router-outlet />

				<ion-tab-bar slot="bottom">
					<ion-tab-button tab="home" href="/mobile/home">
						<ion-icon :icon="ioniconsHomeOutline" />
					</ion-tab-button>

					<ion-tab-button tab="tab1" href="/mobile/tabs/tab1">
						<ion-icon :icon="ioniconsQrCodeOutline" />
					</ion-tab-button>

					<ion-tab-button tab="tab2" href="/mobile/profile">
						<ion-icon :icon="ioniconsPersonOutline" />
					</ion-tab-button>
				</ion-tab-bar>
			</ion-tabs>
		</ion-content>
	</ion-page>
</template>