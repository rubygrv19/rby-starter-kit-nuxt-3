<template>
	<ion-page>
		<ion-content>
			<ion-tabs>
				<ion-router-outlet />

				<ion-tab-bar>
					<ion-tab-button tab="home" href="/modules/home">
						<ion-icon :icon="ioniconsHomeOutline" />
					</ion-tab-button>

					<ion-tab-button tab="tab1" href="#">
						<ion-icon :icon="ioniconsQrCodeOutline" />
					</ion-tab-button>

					<ion-tab-button tab="tab2" href="/modules/profile">
						<ion-icon :icon="ioniconsPersonOutline" />
					</ion-tab-button>
				</ion-tab-bar>
			</ion-tabs>
		</ion-content>
	</ion-page>
</template>